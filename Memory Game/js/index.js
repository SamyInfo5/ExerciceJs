const keyApi = "31U1bqlQs6hNTPvgY7zeXzS4KN2ZT0HQCgrlfr40nypNqgqY3q1XE2eW";
const BASE_URL = "https://api.pexels.com/v1/search";
const box_Game = document.getElementById("game");
let flippedCards = 0;
let tab;
let tab2;
let tabCheck = [];
let tabChild = [];

const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
};

const random = () => {
  return Math.floor(Math.random() * 1000);
};

const params = {
  query : 'people',
  page: random(),
  per_page: 6
}

const encodedParams = Object.keys(params).map(key => {
  if (Array.isArray(params[key])) {
    return params[key].map(value => `${encodeURIComponent(key)}[]=${encodeURIComponent(value)}`).join('&');
  }
  return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
});

const queryString = encodedParams.join('&');

const url = `${BASE_URL}?${queryString}`

async function fetchData(url) {
  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: keyApi,
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

fetchData(url, keyApi)
  .then((data) => {
    tab = data.photos;
    tab2 = data.photos;
    tab2.forEach((element) => {
      tab.push(element);
    });
    shuffle(tab);
    tab.forEach((item) => {
      const flipCard = document.createElement("div");
      flipCard.classList.add("flip-card");
      const flipCardInner = document.createElement("div");
      flipCardInner.classList.add("flip-card-inner");
      flipCardInner.setAttribute("id", item.id);
      const flipCardFront = document.createElement("div");
      flipCardFront.classList.add("flip-card-front");
      const imgFront = document.createElement("img");
      imgFront.src = "./assets/front.png";
      imgFront.style.height = "13vh";
      const flipCardBack = document.createElement("div");
      const imgBack = document.createElement("img");
      imgBack.classList.add("backImg");
      imgBack.src = item.src.tiny;
      imgBack.style.height = "10vh";

      flipCard.appendChild(flipCardInner);
      flipCardInner.appendChild(flipCardFront);
      flipCardInner.appendChild(flipCardBack);
      flipCardFront.appendChild(imgFront);
      flipCardBack.appendChild(imgBack);
      box_Game.appendChild(flipCard);
    });
    selectCard();
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const selectCard = () => {
  const card = document.querySelectorAll(".flip-card .flip-card-inner");
  card.forEach((item) => {
    item.addEventListener("click", () => {
      if (!item.classList.contains("flip") && !tabCheck.includes(item) && flippedCards < 2) {
        item.style.transform = "rotateY(180deg)";
        item.classList.add("flip");
        tabCheck.push(item);
        flippedCards++;
        checkCardClicked();
      }
    });
  });
};

const checkCardClicked = () => {
  if (tabCheck.length == 2) {
    let allcardflip = document.querySelectorAll(".flip");
    if (tabCheck[0]["id"] == tabCheck[1]["id"]) {
      console.log("coucou");
      setTimeout(() => {
        validateFlip(allcardflip);
        tabCheck = [];
        flippedCards = 0
      }, 500)
    } else {
      console.log("rater");
      setTimeout(() => {
        removeClassFlip(allcardflip);
        tabCheck = [];
        flippedCards = 0
      }, 1000);
    }
  }
};

const removeClassFlip = (element) => {
  element.forEach((item) => {
    item.classList.remove("flip");
    item.style.transform = "rotateY(0deg)";
  });
};

const validateFlip = (element) => {
  element.forEach((item) => {
    item.style.opacity = "0";
  });
};


const endGame = document.getElementById('endGame')

const  allCardReveal = () => {

}
