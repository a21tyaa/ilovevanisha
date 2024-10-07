const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const meterFill = document.querySelector('.meter-fill');
let hoverInterval;

yesButton.addEventListener('click', function() {
  alert('I love you too my kuchu puchu!!!!!');
  createHearts();
});

noButton.addEventListener('mouseover', function() {
  const containerWidth = window.innerWidth * 0.5;
  const containerHeight = window.innerHeight * 0.5;

  let x = Math.random() * containerWidth - noButton.clientWidth;
  let y = Math.random() * containerHeight - noButton.clientHeight;

  // Ensure button stays within 50% of the viewport
  x = Math.max(0, Math.min(containerWidth - noButton.clientWidth, x));
  y = Math.max(0, Math.min(containerHeight - noButton.clientHeight, y));

  noButton.style.transform = `translate(${x}px, ${y}px)`;
});

yesButton.addEventListener('mouseover', function() {
  hoverInterval = setInterval(() => {
    let currentWidth = parseFloat(getComputedStyle(meterFill).width);
    if (currentWidth < 200) {
      meterFill.style.width = currentWidth + 2 + 'px';
    }
  }, 100);
});

yesButton.addEventListener('mouseout', function() {
  clearInterval(hoverInterval);
});

function createHearts() {
  for (let i = 0; i < 5; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.body.appendChild(heart);
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}

