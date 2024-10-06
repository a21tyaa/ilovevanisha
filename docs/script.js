// Love Meter functionality
function showLove() {
    document.getElementById('love-meter').innerHTML = "100% Love 💖";
}

// Countdown Timer functionality
function updateCountdown() {
    const startDate = new Date('2024-04-21T16:59:00');
    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('countdown').innerHTML = 
        `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds since we started talking 💕`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial countdown display
updateCountdown();
