const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};

refs.stopBtn.setAttribute('disabled', '');
refs.startBtn.addEventListener('click', clickStart);
refs.stopBtn.addEventListener('click', clickStop);
let intervaId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function clickStart() {
     intervaId = setInterval(() => {
        const color = getRandomHexColor();
        document.body.style.backgroundColor = color;
        refs.startBtn.setAttribute('disabled', '');
        refs.stopBtn.removeAttribute('disabled');
     }, 1000)
};

function clickStop() {
    clearInterval(intervaId);
    refs.stopBtn.setAttribute('disabled', '');
    refs.startBtn.removeAttribute('disabled');
};


