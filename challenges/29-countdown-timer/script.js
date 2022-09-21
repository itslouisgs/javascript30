const buttons = document.getElementsByClassName("timer__button");
const timeLeftDisplay = document.querySelector(".display__time-left");
const endTimeDisplay = document.querySelector(".display__end-time");
let countdown;

const format2Digits = (num) => {
  return num.toString().padStart(2, "0");
};

const convertSeconds = (seconds) => {
  const minutes = format2Digits(Math.floor(seconds / 60));
  const remainingSeconds = format2Digits(seconds % 60);

  return { minutes: minutes, remainingSeconds: remainingSeconds };
};

const displayTimeLeft = (secondsLeft) => {
  const time = convertSeconds(secondsLeft);
  const display = `${time.minutes}:${time.remainingSeconds}`;
  timeLeftDisplay.textContent = display;
  document.title = display;
};

const displayEndTime = (timestamp) => {
  const endTime = new Date(timestamp);
  endTimeDisplay.textContent = `Be back at 
  ${format2Digits(endTime.getHours())}:${format2Digits(endTime.getMinutes())}`;
};

const setCountdown = function (seconds) {
  clearInterval(countdown);
  const then = Date.now() + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
};

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", function () {
    const seconds = parseInt(this.dataset.time);
    setCountdown(seconds);
  });
});

document.customForm.addEventListener("submit", function (e) {
  if (isNaN(this.minutes.value)) {
    alert("Invalid value! Please try again!");
    return;
  }
  e.preventDefault();
  setCountdown(this.minutes.value * 60);
  this.reset();
});
