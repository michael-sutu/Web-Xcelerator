let timelineInterval;

function resetSelectedTime(next) {
    const currentlySelected = document.querySelector(".selected-time");
    if (currentlySelected) {
        currentlySelected.classList.remove('selected-time');
    }

    const allPoints = document.querySelectorAll(".timeline-point");
    if (allPoints[next]) {
        allPoints[next].querySelector(".description").classList.add("selected-time");
    }
}

function updateTimelineBasedOnBackgroundPosition() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    const computedStyle = window.getComputedStyle(timeline);
    let progress;

    if (window.innerWidth > 1100) {
        const backgroundPositionX = computedStyle.backgroundPositionX;
        progress = 100 - parseFloat(backgroundPositionX);
    } else {
        const backgroundPositionY = computedStyle.backgroundPositionY;
        progress = 100 - parseFloat(backgroundPositionY);
    }

    const timelinePoints = document.querySelectorAll(".timeline-point");
    let thresholdArray = [5, 27.5, 50, 72.5, 95];
    timelinePoints.forEach((point, index) => {
        const threshold = thresholdArray[index];
        if (progress >= threshold) {
            point.style.backgroundColor = "#09B0D5";
            resetSelectedTime(index);
        } else {
            point.style.backgroundColor = "#ddd";
        }
    });
}

function resetCssAnimations() {
    const timelines = document.querySelectorAll('.timeline');
    timelines.forEach(elem => {
        const newElem = elem.cloneNode(true);
        elem.parentNode.replaceChild(newElem, elem);
    });
}

function resetJsAnimations() {
    clearInterval(timelineInterval);
    timelineInterval = setInterval(updateTimelineBasedOnBackgroundPosition, 100);
}

function handleVisibilityChange() {
    if (!document.hidden) {
        resetCssAnimations();
        resetJsAnimations();
    }
}

function dropdown() {
    document.querySelector('.dropdown-content').classList.toggle('show-dropdown-content');
    document.querySelector('.dropdown-btn').classList.toggle("dropped-down");
    if (document.querySelector('.dropdown-content').classList.contains('show-dropdown-content')) {
        document.querySelector('.dropdown-btn').querySelector("i").className = "fa-solid fa-x";
    } else {
        document.querySelector('.dropdown-btn').querySelector("i").className = "fa-solid fa-bars";
    }
}

document.querySelector('.dropdown-btn').addEventListener('click', function() {
    dropdown();
});

document.querySelector(".timeline").style.animationPlayState = 'running';
resetJsAnimations();
document.addEventListener("visibilitychange", handleVisibilityChange);
