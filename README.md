# Web Xcelerator

Web Xcelerator is a streamlined web template designed specifically for web agencies that target small local businesses. It provides a robust starting point for developing custom websites that need to feature services, portfolios, and contact forms efficiently and effectively.

## Features

- **Contact Form Integration:** Built-in support for contact form submissions with feedback to both the service provider and the customer.
- **Static File Serving:** Serves static files such as HTML, CSS, and images, making it easy to customize the website's design and content.
- **Email Notifications:** Utilizes Nodemailer for sending email notifications upon form submissions, ensuring that messages from potential clients are immediately acknowledged and responded to.

## Getting Started

### Prerequisites

- Node.js installed on your machine. If you don't have Node.js installed, you can download it from [Node.js website](https://nodejs.org/).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/michael-sutu/Web-Xcelerator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Web-Xcelerator
    ```
3. Install the necessary dependencies:
    ```bash
    npm install
    ```
4. Start the application:
    ```bash
    npm start
    ```
    This will run the application on `http://localhost:1000`.

### Configuration

- **Email Service Setup:** To set up email notifications, edit the Nodemailer transport configuration in `index.js` with your email service provider's details and credentials.
  
    **Important:** For security reasons, it's highly recommended to use environment variables or a configuration file (not included in the repository) to store sensitive information such as email credentials.

## Usage

After starting the application, you can access the web template by navigating to `http://localhost:1000` in your web browser. To test the contact form and email functionality, fill out the form on the homepage and submit it.
