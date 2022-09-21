const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");

let previousHole;
let timeUp = false;
let score = 0;

const startGame = () => {
  score = 0;
  timeUp = false;
  scoreBoard.textContent = score;
  peep();
  setTimeout(() => {
    timeUp = true;
    alert(`Time's up! Your score is ${score}`);
  }, 10000);
};

const peep = () => {
  const hole = getRandomHole();
  hole.classList.add("up");

  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, randomTime(200, 1200));
};

const bonk = function (e) {
  if (!e.isTrusted) return;
  this.parentNode.classList.remove("up");
  updateScore();
};

const updateScore = () => {
  score++;
  scoreBoard.textContent = score;
};

const getRandomHole = () => {
  const randomId = Math.floor(Math.random() * holes.length);
  return holes[randomId] == previousHole ? getRandomHole() : holes[randomId];
};

const randomTime = (min, max) => Math.round(Math.random() * (max - min) + min);

moles.forEach((mole) => mole.addEventListener("click", bonk));
