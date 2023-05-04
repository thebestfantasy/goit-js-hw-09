import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onClick);
let isActive = false;


function onClick(evt) {
  evt.preventDefault();
  
  if (isActive) {
    return
  };

  isActive = true;
  const formData = new FormData(form);
  const delay = Number(formData.get('delay'));
  const step = formData.get('step');
  const amount = formData.get('amount');
  let promises = [];
 
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
  Promise.all(promises).finally(() => { 
  isActive = false;
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

