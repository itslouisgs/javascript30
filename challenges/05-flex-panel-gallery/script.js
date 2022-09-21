const togglePanel = panel => panel.classList.toggle("open");

const toggleText = (e, panel) => {
    if (e.propertyName.includes("flex"))
        panel.classList.toggle("open-active");
}

document.querySelectorAll("div.panel").forEach(panel => {
    panel.addEventListener("click", () => togglePanel(panel));
    panel.addEventListener("transitionend", e => toggleText(e, panel));
})