let isDark =
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);

const toggleIcon = () => {
  if (isDark) {
    document.getElementById("ic-sun").style.display = "none";
    document.getElementById("ic-moon").style.display = "block";
  } else {
    document.getElementById("ic-sun").style.display = "block";
    document.getElementById("ic-moon").style.display = "none";
  }
};

const setup = () => {
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  toggleIcon();
};

const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
  isDark = !isDark;
  localStorage.theme = isDark ? "dark" : "light";

  toggleIcon();
};

window.onload = setup;
