const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.querySelector(".score");
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");
let score = 0;

startButton.addEventListener("click", () => {
  holes.forEach((hole) => hole.classList.remove("class"));
  const repeat = setInterval(() => {
    let randomIndex = Math.floor(Math.random() * holes.length);
    holes[randomIndex].classList.add("class");
  }, 2000);
  setInterval(() => {
    holes.forEach((hole) => hole.classList.remove("class"));
  }, 3000);
  holes.forEach((hole) =>
    hole.addEventListener("click", () => {
      if (hole.classList.contains("class")) {
        countScore();
        hole.classList.remove("class");
      }
    })
  );
  resetButton.addEventListener("click", () => {
    holes.forEach((hole) => hole.classList.remove("class"));
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    clearInterval(repeat);
  });
});

function countScore() {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
  hole.classList.remove("class");
}
