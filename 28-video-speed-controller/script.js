const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");
let isDown = false;

speed.addEventListener("mousemove", function (e) {
  if (!isDown) return;

  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const height = Math.round(percent * 100);

  const playbackRate = percent * (4 - 0.4) + 0.4;

  speedBar.style.height = `${height}%`;
  speedBar.textContent = playbackRate.toFixed(2) + "x";
  video.playbackRate = playbackRate;
});

speed.addEventListener("mousedown", () => (isDown = true));
speed.addEventListener("mouseup", () => (isDown = false));
speed.addEventListener("mouseleave", () => (isDown = false));
