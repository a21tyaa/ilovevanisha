// Countdown Timer
const startDate = new Date('April 21, 2024 16:59:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = now - startDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds since we started talking ❤️`;
}
setInterval(updateCountdown, 1000);

// Love Meter Pop-up Animation (trigger once revealed)
document.getElementById("love-meter").addEventListener("click", function() {
    this.style.animation = "pop 1s ease-in-out";
});

// Moving No Button
document.getElementById("no-btn").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.top = Math.random() * (window.innerHeight - this.clientHeight) + "px";
    this.style.left = Math.random() * (window.innerWidth - this.clientWidth) + "px";
});

// Falling Hearts on Yes Button Click
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

document.getElementById("yes-btn").addEventListener("click", () => {
    setInterval(createHeart, 200);
    alert("I love you too, my kuchu puchu! 💖");
});
