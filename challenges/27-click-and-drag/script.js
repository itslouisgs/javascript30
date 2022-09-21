const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

const getCurrentLength = (e) => e.pageX - slider.offsetLeft;

const removeActive = () => {
  isDown = false;
  slider.classList.remove("active");
};

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = getCurrentLength(e);
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const displacement = (getCurrentLength(e) - startX) * 3;
  slider.scrollLeft = scrollLeft - displacement;
});

slider.addEventListener("mouseleave", removeActive);
slider.addEventListener("mouseup", removeActive);
