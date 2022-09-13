const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.appendChild(highlight);

const highlightLink = (target) => {
  const coords = target.getBoundingClientRect();

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left + window.scrollX}px, 
   ${coords.top + window.scrollY}px)`;
};

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", (e) => highlightLink(e.target));
});
