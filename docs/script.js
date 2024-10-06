// Yes/No Button Logic
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

yesBtn.addEventListener("click", function () {
    alert("I love you too, my kuchu puchu!");
});

noBtn.addEventListener("mouseover", function () {
    // Move "No" button to random position when hovered
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * window.innerHeight + "px";
    noBtn.style.left = Math.random() * window.innerWidth + "px";
});

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
