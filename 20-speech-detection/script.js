window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const words = document.querySelector(".words");

const sr = new SpeechRecognition();
sr.interimResults = true;
sr.lang = "en-UK";

let p = document.createElement("p");
words.appendChild(p);

const censorSpeech = (speech) => speech.replace(/poop|poo|shit|dump/gi, "💩");

sr.addEventListener("result", (e) => {
  const speech = Array.from(e.results)
    .map((result) => result[0].transcript)
    .join(" ");

  p.textContent = censorSpeech(speech);

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
});

sr.addEventListener("end", sr.start);
sr.start();
