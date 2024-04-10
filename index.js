const express = require("express")
const nodemailer = require('nodemailer')
const app = express()

app.listen(1000)
app.use(express.urlencoded({ extended: true }))
console.log("Live at http://localhost:1000")

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'YOUR_WEBSITE_EMAIL',
        pass: 'EMAIL_PASS'
    }
})

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
})

app.get("/src/:filename", (req, res) => {
    res.sendFile(__dirname+`/src/${req.params.filename}`)
})

app.get("/images/:filename", (req, res) => {
    res.sendFile(__dirname+`/images/${req.params.filename}`)
})

app.post('/message', (req, res) => {
    const { name, email, message } = req.body

    const mailOptionsForYou = {
        from: 'YOUR_WEBSITE_EMAIL',
        to: 'YOUR_PERSONAL_EMAIL',
        subject: 'New Message Received',
        text: `You have received a new message from ${name} (Email: ${email}):\n\n ${message}`
    }

    const mailOptionsForSender = {
        from: 'michael.webxcelerator@gmail.com',
        to: email,
        subject: 'Your Message Was Received',
        text: `Hello ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you soon.\n\nBest Regards,\nWeb Xcelerator`
    };

    transporter.sendMail(mailOptionsForYou, function(error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent to yourself: ' + info.response)
        }
    })

    transporter.sendMail(mailOptionsForSender, function(error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Confirmation email sent to sender: ' + info.response)
        }
    })

    res.sendFile(__dirname+"/public/message.html")
})
