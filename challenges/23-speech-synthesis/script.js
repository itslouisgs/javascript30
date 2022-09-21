const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

const populateVoices = function () {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .filter((voice) => voice.lang.includes("en"))
    .map((voice) => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join(" ");

  console.log(voices);
};

const setVoice = function () {
  msg.voice = voices.find((voice) => voice.name === this.value);
  console.log(msg.voice);
  speak();
};

const speak = () => {
  speechSynthesis.cancel();
  console.log(msg.text.length);
  if (msg.text.length !== 0) speechSynthesis.speak(msg);
  else {
    const reminder = new SpeechSynthesisUtterance();
    reminder.text = "Please input your message";
    reminder.voice = voices.find(
      (voice) => voice.name === "Microsoft Zira - English (United States)"
    );

    speechSynthesis.speak(reminder);

    document.querySelector('[name="text"]').focus();
  }
};

const stop = () => {
  speechSynthesis.cancel();

  const stop = new SpeechSynthesisUtterance();
  stop.text = "Stopping";
  stop.voice = voices.find((voice) => voice.name === "Microsoft Zira - English (United States)");

  speechSynthesis.speak(stop);
};

const setOption = function () {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  speak();
};

options.forEach((option) => option.addEventListener("change", setOption));

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
speakButton.addEventListener("click", speak);
stopButton.addEventListener("click", stop);
