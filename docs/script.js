const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const meterFill = document.querySelector('.meter-fill');
let hoverInterval;

yesButton.addEventListener('click', function() {
  alert('I love you too my kuchu puchu!!!!!');
  createHearts();
});

noButton.addEventListener('mouseover', function() {
  let x = Math.random() * window.innerWidth - noButton.clientWidth;
  let y = Math.random() * window.innerHeight - noButton.clientHeight;
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
