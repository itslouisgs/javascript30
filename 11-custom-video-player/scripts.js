const video = document.querySelector("video.player__video");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggleButton = document.querySelector("button.player__button");
const ranges = document.querySelectorAll(".player__slider");
const skipButtons = document.querySelectorAll("[data-skip]");

const getProgressPercentage = (currentTime, duration) =>
  (currentTime / duration) * 100;

const updateProgress = () => {
  progressBar.style.flexBasis = `${getProgressPercentage(
    video.currentTime,
    video.duration
  )}%`;
};

const updateRange = (e) => {
  video[e.target.name] = e.target.value;
};

const skip = (skipTime) => {
  video.currentTime += parseFloat(skipTime);
};

const togglePlay = () => {
  video.paused ? video.play() : video.pause();
};

const updateButton = () => {
  toggleButton.textContent = video.paused ? "►" : "❚ ❚";
};

const scrub = (e) => {
  video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
};

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", updateProgress);

toggleButton.addEventListener("click", togglePlay);

ranges.forEach((range) => {
  range.addEventListener("change", updateRange);
  range.addEventListener("mousemove", updateRange);
});

skipButtons.forEach((button) =>
  button.addEventListener("click", (e) => skip(e.target.dataset.skip))
);

let isMouseDown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => isMouseDown && scrub(e));
progress.addEventListener("mousedown", () => (isMouseDown = true));
progress.addEventListener("mouseup", () => (isMouseDown = false));

window.addEventListener("keyup", (e) => {
  switch (e.code) {
    case "Space": // Play
      togglePlay();
      break;
    case "ArrowLeft": // Skip Backward
      skip(-10);
      break;
    case "ArrowRight": // Skip Forward
      skip(25);
      break;
    case "ArrowUp": // Volume up
      break;
    case "ArrowDown": // Volume up
      break;
  }
  e.code = "Space" && togglePlay;
});
