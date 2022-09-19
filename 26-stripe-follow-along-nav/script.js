const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");

const showDropdown = function () {
  const nav = document.querySelector(".top");

  this.classList.add("trigger-enter");
  setTimeout(() => {
    this.classList.contains("trigger-enter") && this.classList.add("trigger-enter-active");
  }, 150);
  background.classList.add("open");

  const dropdownCoords = this.querySelector(".dropdown").getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  background.style.width = `${dropdownCoords.width}px`;
  background.style.height = `${dropdownCoords.height}px`;
  background.style.transform = `translate(${dropdownCoords.left}px, 
   ${dropdownCoords.top - navCoords.top}px)`;
};

const hideDropdown = function () {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
};

triggers.forEach((trigger) => {
  trigger.addEventListener("mouseenter", showDropdown);
  trigger.addEventListener("mouseleave", hideDropdown);
});
