// Countdown Logic
const startDate = new Date('July 25, 2024');
const countdownTimer = document.getElementById("countdown-timer");

function updateCountdown() {
    const now = new Date();
    const timeDiff = now - startDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    countdownTimer.innerText = daysDiff;
}

setInterval(updateCountdown, 1000); // Update countdown every second
