const navbar = document.getElementById("main");
const topOfNav = navbar.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY >= topOfNav) {
    document.body.classList.add("fixed-nav");
    document.body.style.paddingTop = navbar.offsetHeight + "px";
  } else {
    document.body.classList.remove("fixed-nav");
    document.body.style.paddingTop = "0";
  }
});
