const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

noButton.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noButton.style.position = "absolute";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
});

yesButton.addEventListener("click", () => {
  alert("I love you too my kuchu puchu!!!!!");
});