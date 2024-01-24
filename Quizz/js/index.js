const urlApi = "https://quizzapi.jomoreschi.fr/api/v1/quiz";
const questionsQuizz = document.querySelector(".question");
const responseQuizz = document.querySelector(".responses");
const elementQuestions = document.createElement("h3");
const btnStart = document.getElementById("startBtn");
const user = document.getElementById("user");
const game = document.querySelector(".game");
const gameStart = document.querySelector(".gameStart");
const gameEnd = document.querySelector(".gameEnd");
const tabPlayer = document.getElementById("player");
const tabScore = document.getElementById("score");
const TextUser = document.getElementById("userText");
const TextScore = document.getElementById("scoreUser");
let storageScore = JSON.parse(localStorage.getItem("score"));
const btnReset = document.getElementById('reset')
let round = 0;
let score = 0;

btnStart.addEventListener("click", () => {
  if (user === "") return;
  round = 0
  score= 0
  const pseudo = user.value;
  gameStart.classList.add("hidden");
  game.classList.remove("hidden");
  startQuizz(urlApi);
});

const savePlayer = (list) => {
  if (storageScore) {
    storageScore.push(list);
    localStorage.setItem("score", JSON.stringify(storageScore));
  } else {
    storageScore = [];
    storageScore.push(list);
    localStorage.setItem("score", JSON.stringify(storageScore));
  }
};

btnReset.addEventListener('click', () => {
    gameEnd.classList.add("hidden");
    gameStart.classList.remove("hidden");
    game.classList.remove("hidden");
})

const endGame = () => {
  if (round === 10) {
    remAllBtn();
    const dataPlayer = {
      player: user.value,
      score: score,
    };
    savePlayer(dataPlayer);

    const data = JSON.parse(localStorage.getItem("score"));
    data.forEach((item) => {
      const userData = item.player;
      const TabPlayer = document.createElement("p");
      TabPlayer.innerHTML = userData;
      tabPlayer.appendChild(TabPlayer)
      const scoreData = item.score;
      const TabScore = document.createElement("p");
      TabScore.innerHTML = scoreData;
      tabScore.appendChild(TabScore)
    });
    console.log("data", data);

    gameEnd.classList.remove("hidden");
    gameStart.classList.add("hidden");
    game.classList.add("hidden");
  }
};

/* I generate a random number to be able to put my answer in different places */
const getRandomQuestion = () => {
  return Math.floor(Math.random() * 240);
};

const validateResponse = (resApi) => {
  /* je recupere tout les button */
  const btnresponse = document.querySelectorAll("button");
  /* je les liste un par un pour les avoir tous séparement */
  btnresponse.forEach((item) => {
    /* je fais un ecouteur d'evenement pour pouvoir savoir sur lequelle je clique  */
    item.addEventListener("click", () => {
      /* ChoiceUser est une variable content le text de chaque button */
      choiceUser = item.innerHTML;
      /* condition pour savoir si la reponse choisis et la bonne reponse de l'api sont juste */
      if (choiceUser === resApi) {
        console.log("bien");
        score += 1;
        round += 1;
        remAllBtn();
        startQuizz(urlApi);
      } else {
        console.log("mauvais");
        score = score;
        round += 1;
        remAllBtn();
        startQuizz(urlApi);
      }
      endGame();
    });
  });
};

const createBtn = (tab) => {
  for (let i = 0; i < tab.length; i++) {
    /* creation du bouton */
    const btnResponse = document.createElement("button");
    /* selectionner la reponse avec l'index qui est egale au i */
    let rep = tab[i];
    /* j'introduis la reponse dans le button */
    btnResponse.innerHTML = rep;
    btnResponse.id = i;
    /* j'ajoute le button au DOM */
    responseQuizz.appendChild(btnResponse);
  }
};

const remAllBtn = () => {
  const buttonRemoved = document.querySelectorAll("button");
  buttonRemoved.forEach((btn) => btn.remove());
};

const startQuizz = (url) => {
  remAllBtn();
  fetch(`${url}/`)
    .then((res) => res.json())
    .then((res) => {
      /* variable pour un chiffre random */
      let QuestionNumber = getRandomQuestion();
      let random = res.quizzes[QuestionNumber];

      /* je récupere une question aléatoire  */
      let questions = random.question;

      /* je mets la questions dans le DOM */
      elementQuestions.innerHTML = questions;
      questionsQuizz.appendChild(elementQuestions);

      /* je recupère les 4 réponses */
      let badRes = random.badAnswers;
      let goodRes = random.answer;

      let response = []
      /* je copie les données recuperer pour les mettre dans un nouveau tableau */
      response = badRes;

      /* je push la bonne response dans response  */
      response.push(goodRes);

      /* je filtre le tableau pour ne pas avoir tjrs la bonne réponse au même endroit */
      response.sort(() => Math.random() - 0.5);
      createBtn(response);
      validateResponse(goodRes);
      console.log(response)
    });
};
