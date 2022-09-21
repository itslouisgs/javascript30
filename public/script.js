fetch("README.md")
  .then((response) => response.text())
  .then((result) => (document.getElementById("content").innerHTML = marked.parse(result)));

document.getElementById("themeSwitcher").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
