import debounce from "./debounce.js";

const checkSlide = () => {
  document.querySelectorAll(".site-wrap img").forEach((image) => {
    const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    isHalfShown && isNotScrolledPast
      ? image.classList.add("active")
      : image.classList.remove("active");
  });
};

window.addEventListener("scroll", debounce(checkSlide));
