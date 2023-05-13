import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

let timerID = null;

const refs = {
  inputDate: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('span[data-hours]'),
  dataMinutes: document.querySelector('span[data-minutes]'),
  dataSeconds: document.querySelector('span[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date().getTime();
    const timerInSeconds = selectedDates[0] - currentDate;

    if (timerInSeconds <= 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return null;
    }

    const objTimer = convertMs(timerInSeconds);
    renderTimer(objTimer);
    refs.startBtn.disabled = false;
    refs.inputDate.disabled = true;
  },
};

refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', onClickStart);

const objFlatpickr = flatpickr(refs.inputDate, options);

function onClickStart() {
  refs.startBtn.disabled = true;
  const selectTime = objFlatpickr.latestSelectedDateObj.getTime();
  timerID = setInterval(startTime, 1000, selectTime);
}

function startTime(selectTime) {
  let currentDate = selectTime - new Date().getTime();

  if (currentDate <= 0) {
    clearInterval(timerID);
    renderTimer({ days: '00', hours: '00', minutes: '00', seconds: '00' });
    refs.startBtn.disabled = true;
    refs.inputDate.disabled = false;
    return;
  }

  const objTimer = convertMs(currentDate);
  renderTimer(objTimer);
}

function renderTimer(objTimer) {
  refs.dataDays.innerText = String(objTimer.days).padStart(2, 0);
  refs.dataHours.innerText = String(objTimer.hours).padStart(2, 0);
  refs.dataMinutes.innerText = String(objTimer.minutes).padStart(2, 0);
  refs.dataSeconds.innerText = String(objTimer.seconds).padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
