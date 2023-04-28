import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const refs = {
  dayTime: document.querySelector('.value[data-days]'),
  hourTime: document.querySelector('.value[data-hours]'),
  minTime: document.querySelector('.value[data-minutes]'),
  secTime: document.querySelector('.value[data-seconds]'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
}; 

const timer = {
  intervalId : null,
  isActive: false,
  start() {
    if (this.isActive) {
      return
    }
    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = convertMs(deltaTime);
      
      updatetime(time);

    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  }
};

refs.startBtn.addEventListener('click', () => { 
  timer.start();
});

refs.stopBtn.addEventListener('click', () => { 
  timer.stop();
});

flatpickr("#datetime-picker", options);

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
  // const days = Math.floor(ms / day);
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  // const hours = Math.floor((ms % day) / hour);
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  // const minutes = Math.floor(((ms % day) % hour) / minute);
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  // const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
