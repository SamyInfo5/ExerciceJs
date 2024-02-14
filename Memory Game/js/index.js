const keyApi = "31U1bqlQs6hNTPvgY7zeXzS4KN2ZT0HQCgrlfr40nypNqgqY3q1XE2eW";
const BASE_URL = "https://api.pexels.com/v1/";
const box_Game = document.getElementById("game");
let tab;
let tab2;

const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
};

async function fetchData(url, key) {
  const res = await fetch(BASE_URL + url, {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: key,
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

fetchData("search?query=people&per_page=6", keyApi)
  .then((data) => {
    tab = data.photos;
    tab2 = data.photos;
    tab2.forEach((element) => {
      tab.push(element);
    });
    shuffle(tab);
    tab.forEach((item) => {
      console.log("item", item);
      const flipCard = document.createElement("div");
      flipCard.classList.add("flip-card");
      const flipCardInner = document.createElement("div");
      flipCardInner.classList.add("flip-card-inner");
      const flipCardFront = document.createElement("div");
      flipCardFront.classList.add("flip-card-front");
      const imgFront = document.createElement("img");
      imgFront.src  = './assets/front.png'
      imgFront.style.height = '130px'
      const flipCardBack = document.createElement("div");
      flipCardBack
      const imgBack = document.createElement("img");
      imgBack.src = item.src.tiny
      imgBack.style.height = '100px';

      flipCard.appendChild(flipCardInner)
      flipCardInner.appendChild(flipCardFront)
      flipCardInner.appendChild(flipCardBack)
      flipCardFront.appendChild(imgFront)
      flipCardBack.appendChild(imgBack)
      box_Game.appendChild(flipCard)

    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
