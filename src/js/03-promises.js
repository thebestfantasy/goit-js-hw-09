import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onClick);
let isActive = false;

function onClick(evt) {
  evt.preventDefault();
  
  if (isActive) {
    return
  };

  const formEvt = evt.currentTarget;
  const delay = Number(formEvt.elements.delay.value);
  const step = Number(formEvt.elements.step.value);
  const amount = Number(formEvt.elements.amount.value);
  let promises = [];
  let isValid = true;

  if (delay < 0 || step < 0 || amount < 0) {
    window.alert("Значення має бути більше 0");
    isValid = false;
    return
  }
  
  for (let i = 1; i <= amount; i += 1) {
    const promise = createPromise(i, delay + (i - 1) * step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    promises.push(promise);
  }

  isActive = true;

  Promise.all(promises).finally(() => { 
    isActive = false;
    formEvt.reset();
});
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }   
    }, delay)
  });
}

