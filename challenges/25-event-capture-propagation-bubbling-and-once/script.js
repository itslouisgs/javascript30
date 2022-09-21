const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

const log = function (e) {
  // e.stopPropagation();
  console.log(this.classList.value);
};

divs.forEach((div) =>
  div.addEventListener("click", log, {
    capture: false,
    once: true,
  })
);

button.addEventListener(
  "click",
  () => {
    console.log("Clicked!!!");
  },
  {
    once: true,
  }
);
