fetch("README.md")
  .then((response) => response.text())
  .then((result) => {
    document.getElementById("content").innerHTML = marked.parse(result);
  });

window.onscroll = () => {
  if (window.pageYOffset > 72) {
    document.documentElement.classList.add("scroll");
  } else {
    document.documentElement.classList.remove("scroll");
  }
};
