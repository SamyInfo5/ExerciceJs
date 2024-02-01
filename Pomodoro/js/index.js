const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const btnReset = document.getElementById("reset");
const btnBox = document.getElementById("btnlaunch");
const minTimer = document.getElementById("min");
const secTimer = document.getElementById("sec");
let min = 49;
let sec = 59;

const startTimer = () => {
  minTimer.innerHTML = min;
  secTimer.innerHTML = sec;
  btnStart.classList.toggle("hidden");
  btnStop.classList.toggle("hidden");
  btnReset.classList.toggle('hidden')
  let interval = setInterval(() => {
    if (sec == 0) {
      min -= 1;
      sec = 59;
      minTimer.innerHTML = min;
      secTimer.innerHTML = sec;
    } else {
      sec -= 1;
      secTimer.innerHTML = sec;
    }
    console.log("timer", min, sec);
  }, 1000);
  stopTimer(interval)
};

const stopTimer = (timer) => {
    btnStop.addEventListener('click', () => {
        clearInterval(timer);
        const btnStop = document.getElementById("stop");
        btnStop.classList.add("hidden");
        btnStart.classList.remove("hidden");
        btnReset.classList.remove("hidden");
    })
};

btnStart.addEventListener("click", startTimer);
