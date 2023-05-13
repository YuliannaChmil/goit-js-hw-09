import Notiflix from 'notiflix';

const refs = {
  inputDelay: document.querySelector('[name="delay"]'),
  inputStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
  submitBtn: document.querySelector('button'),
};

refs.submitBtn.addEventListener('click', onCreatePromiseBtn);

function onCreatePromiseBtn(event) {
  event.preventDefault();

  let delay = Number(refs.inputDelay.value);
  let step = Number(refs.inputStep.value);
  let amount = Number(refs.inputAmount.value);

  if (delay < 0 || step < 0 || amount <= 0) {
    return Notiflix.Notify.warning('Enter a positive value!');
  }

  for (position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
