/* je recupere les element html pour ensuite recuperer leurs valeurs  */
const btn = document.getElementById("random");
const select = document.getElementById("select");
const colorBox = document.getElementById("color-gradient");
const textResult = document.getElementById("textResult");
const option = document.querySelectorAll("option");
const inputColor1 = document.querySelector("#colorPicker1");
const inputColor2 = document.querySelector("#colorPicker2");
const inputColor3 = document.querySelector("#colorPicker3");
let selected = "right";
let colorTab = [];

inputColor1.addEventListener("input", () => {
    colorBox.style.background = `linear-gradient(${inputColor1.value},${inputColor2.value},${inputColor3.value})`
    let firstcolor = inputColor1.value 
});
inputColor2.addEventListener("input", () => {
    colorBox.style.background = `linear-gradient(${inputColor1.value},${inputColor2.value}, ${inputColor3.value})`
});
inputColor3.addEventListener("input", () => {
    colorBox.style.background = `linear-gradient(${inputColor1.value},${inputColor2.value},${inputColor3.value})`
});

const setColor = (arrColor) => {
  arrColor.forEach((element) => {
    console.log("element", element);
    const paraResult = document.createElement("p");
    paraResult.innerHTML = element;
    textResult.appendChild(paraResult);
  });
};

/* avoir une couleurs random */
const getRandomColor = () => {
  const letters = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

/*function pour changer la couleur de la box  */
const changeBackground = () => {
  let colorOne = getRandomColor();
  let colorTwo = getRandomColor();
  let colorThree = getRandomColor();

  colorBox.style.background = `linear-gradient(${colorOne},${colorTwo},${colorThree})`;
};

/* test pour voir si ma function random marchait  */

const saveColor = (color) => {};
