import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  onInput : document.querySelector('input'),
  dayTime: document.querySelector('.value[data-days]'),
  hourTime: document.querySelector('.value[data-hours]'),
  minTime: document.querySelector('.value[data-minutes]'),
  secTime: document.querySelector('.value[data-seconds]'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
}; 

refs.startBtn.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (Date.parse(selectedDates) >= Date.now()) {
      refs.startBtn.removeAttribute('disabled');
    }
  },
};


refs.startBtn.addEventListener('click', () => { 
  timer.start();
});

refs.stopBtn.addEventListener('click', () => { 
  timer.stop();
});

flatpickr("#datetime-picker", options);

const timer = {
  intervaId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return
    }
    const selectedDate = new Date(refs.onInput.value).getTime();
    console.log(selectedDate);

    if (selectedDate < Date.now()) {
      window.alert("Please choose a date in the future");
      console.log(selectedDate);
    }
    
    this.intervalId = setInterval(() => {
      const endTime = Date.now();
      const deltaTime = selectedDate - endTime;
      const time = convertMs(deltaTime);


      if (deltaTime <= 0) {
        clearInterval(this.intervalId);
        return
      }

      updatetime(time);
      
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

function updatetime({ days, hours, minutes, seconds }) {
  refs.dayTime.textContent = days;
  refs.hourTime.textContent = hours;
  refs.minTime.textContent = minutes;
  refs.secTime.textContent = seconds;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
