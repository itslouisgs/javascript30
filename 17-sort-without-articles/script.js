const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const bandsList = document.getElementById("bands");

const removeArticle = (band) => {
  words = band.split(" ");

  if (
    words[0].toLowerCase() == "a" ||
    words[0].toLowerCase() == "the" ||
    words[0].toLowerCase() == "an"
  ) {
    return words.splice(1).join(" ");
  } else {
    return band;
  }
};

bands.sort((a, b) => {
  let aNew = removeArticle(a);
  let bNew = removeArticle(b);

  return aNew < bNew ? -1 : 1;
});
bandsList.innerHTML = bands.map((band) => `<li>${band}</li>`).join("");
