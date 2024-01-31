const box = document.getElementById("box");
const inputs = document.getElementById("inputs");
const addColor = document.getElementById("addColor");
const choiceLinear = document.getElementById("linearBtn");
const choiceRadial = document.getElementById("radial");
const btnSave = document.getElementById("save");
const inputColor1 = document.getElementById("color1");
const inputColor2 = document.getElementById("color2");
const inputRange = document.getElementById("rangeValue");
const resultCode = document.getElementById("result_code");
const authorizedGradientTypes = ["linear", "radial"];
const authorizedGradientSense = ["0deg", "radial"];
let colorsStorage = JSON.parse(localStorage.getItem("colors"));
let colortab = colorsStorage.slice(-1);
let gradientType = authorizedGradientTypes[0];
let gradientSense = authorizedGradientSense[0];
let id = 3;

const setRangeSenseGradient = () => {
  inputRange.addEventListener("input", () => {
    gradientSense = `${inputRange.value}deg`;
    setBackground();
  });
};

const setColorButton = () => {
  inputColor1.setAttribute("value", colortab[0][0]);
  inputColor2.setAttribute("value", colortab[0][1]);
};

const addBtnColors = () => {
  const button = document.createElement("input");
  button.setAttribute("type", "color");
  button.id = `color${id}`;
  inputs.appendChild(button);
  id++;
  setColorBtn();
};

const setColorBtn = () => {
  for (let i = 1; i < id; i++) {
    const bbtn = document.getElementById(`color${i}`);
    bbtn.addEventListener("input", () => {
      let btnclick = bbtn.value;
      bbtn.value = bbtn.value;
      colortab[i - 1] = btnclick;
      setBackground();
      btnSave.addEventListener("click", saveColor(colortab));
    });
  }
};

const setBackground = () => {
  box.style.background = `${gradientType}-gradient(${gradientSense},${colortab.join(
    ","
  )})`;
  resultCode.innerHTML = `background : ${gradientType}-gradient(${gradientSense},${colortab.join(
    ","
  )});`;
};

const setGdradientType = (type) => {
  /*console.log({ setGdradientType: type })*/
  if (!authorizedGradientTypes.includes(type)) return;
  gradientType = type;
  authorizedGradientTypes.forEach((gradient) => {
    document
      .getElementById(`btn-choice_${gradient}`)
      .classList.remove("choices_active");
  });
  document.getElementById(`btn-choice_${type}`).classList.add("choices_active");
  if (type == "radial") {
    gradientSense = "circle";
  } else {
    setRangeSenseGradient();
  }
  setBackground();
};

const saveColor = (Tab) => {
  if (colorsStorage) {
    colorsStorage.push(Tab);
    localStorage.setItem("colors", JSON.stringify(colorsStorage));
  } else {
    colorsStorage = [];
    colorsStorage.push(Tab);
    localStorage.setItem("colors", JSON.stringify(colorsStorage));
  }
};

const copy = async () => {
    const copyText = document.getElementById('result_code').innerHTML
    try{
        await navigator.clipboard.writeText(copyText);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed COpy : ', err)
    }
};

setRangeSenseGradient();
addColor.addEventListener("click", addBtnColors);
setColorButton();
setColorBtn();
setBackground();
