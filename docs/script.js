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

// ... your existing code for the buttons ...

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const loveQuestion = document.getElementById('love-question');

// Make the "Do you love me?" text appear centered on the screen
loveQuestion.style.textAlign = 'center';
loveQuestion.style.fontSize = '3em'; // Adjust font size as needed
loveQuestion.style.marginTop = '20px'; // Add some top margin

// Event listener for the "Yes" button
yesBtn.addEventListener('click', () => {
    alert("I love you too my kuchu puchu!!!!!!!");
});

// Event listener for the "No" button
noBtn.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const buttonRect = noBtn.getBoundingClientRect();

    // Move the button based on mouse position
    noBtn.style.left = `${mouseX - buttonRect.width / 2}px`;
    noBtn.style.top = `${mouseY - buttonRect.height / 2}px`;
});