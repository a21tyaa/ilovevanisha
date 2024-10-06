// Love Meter Function
function showLoveMeter() {
    document.getElementById('meter-display').classList.remove('meter-hidden');
    document.getElementById('meter-display').classList.add('meter-visible');
}

// Countdown since you started talking
function calculateDays() {
    const startDate = new Date("July 25, 2023");
    const currentDate = new Date();
    const timeDiff = currentDate - startDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById('days-count').textContent = daysDiff;
}

calculateDays();
