const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const celebrationMessage = document.getElementById('celebration-message');

// Function to create fireworks
function createFireworks() {
    for (let i = 0; i < 5; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        document.body.appendChild(firework);
    }
}

noBtn.addEventListener('mouseover', () => {
    const newX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const newY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener('click', () => {
    celebrationMessage.classList.remove('hidden');
    createFireworks(); // Call the fireworks function
});
