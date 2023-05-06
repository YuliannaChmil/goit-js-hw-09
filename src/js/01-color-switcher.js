const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId;

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
  intervalId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', true);
}

function onStopBtn() {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
