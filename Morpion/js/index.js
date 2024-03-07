console.log("Coucou Petit Fifou");
const allCase = document.querySelectorAll(".case");
const start_finish = document.getElementById("start-finish");
const finish = document.getElementById("finish");
const start = document.getElementById("start");
let img;

const selectCase = (number) => {
  checkCaseUsers(allCase, number);
  IA();
  checkEndGame();
};

const checkCaseUsers = (array, number) => {
  console.log("array", array[number].children.length);
  if (array[number].children.length == 0) return addUsers(number);
};

const checkCaseAI = (array, number) => {
  console.log("array", array[number].children.length);
  if (array[number].children.length == 0) {
    addAI(number);
  } else {
    IA();
  }
};

const addUsers = (number) => {
  console.log("coucou");
  img = document.createElement("img");
  img.src = "./assets/croix.png";
  img.width = 100;
  img.height = 100;
  allCase[number].appendChild(img);
};

const addAI = (number) => {
  console.log("coucou");
  img = document.createElement("img");
  img.src = "./assets/circle.png";
  img.width = 100;
  img.height = 100;
  allCase[number].appendChild(img);
};

const IA = () => {
  const res = random();
  checkCaseAI(allCase, res);
};

const random = () => {
  return Math.floor(Math.random() * 9);
};

victoryConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkVictory = (symbol) => {
  for (const condition of victoryConditions) {
    const [a, b, c] = condition;
    if (
      allCase[a].children.length &&
      allCase[a].children[0].src.includes(symbol) &&
      allCase[b].children.length &&
      allCase[b].children[0].src.includes(symbol) &&
      allCase[c].children.length &&
      allCase[c].children[0].src.includes(symbol)
    ) {
      return true;
    }
  }
  return false;
};

const checkEndGame = () => {
  if (checkVictory("croix.png")) {
    finish.style.display = "flex";
    start_finish.style.display = "flex";
    const winnerUser = document.getElementById("winner");
    winnerUser.innerHTML = "User";
  } else if (checkVictory("circle.png")) {
    finish.style.display = "flex";
    start_finish.style.display = "flex";
    const winnerUser = document.getElementById("winner");
    winnerUser.innerHTML = "AI ";
  } else {
    // Vérifiez s'il y a égalité ou si le jeu continue
  }
};

const replay = () => {};

const play = () => {
  start_finish.style.display = "none";
  start.style.display = "none"
};