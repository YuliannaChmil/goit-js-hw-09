import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputDelay: document.querySelector('[name="delay"]'),
  inputStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
  submitBtn: document.querySelector('button'),
};

refs.submitBtn.addEventListener('click', onCreatePromiseBtn);

function createPromise(position, delay, step) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const timeDelay = delay + (position - 1) * step;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${timeDelay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${timeDelay}ms`);
      }
    }, timeDelay);
  });
}

function onCreatePromiseBtn(event) {
  event.preventDefault();
  const delay = Number(refs.inputDelay.value);
  const step = Number(refs.inputStep.value);
  const amount = Number(refs.inputAmount.value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay, step)
      .then(message => {
        Notify.success(message);
      })
      .catch(error => {
        Notify.failure(error);
      });
  }
}
