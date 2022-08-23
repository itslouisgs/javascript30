const buttons = document.querySelectorAll(".key");

const playAudio = key =>{
    const audioElement = document.querySelector(`audio[data-key="${key}"]`);
    const buttonElement = document.querySelector(`div[data-key="${key}"]`);

    if (!audioElement) return;

    audioElement.currentTime = 0;
    audioElement.play();
    buttonElement.classList.add("playing");
}

const convertToKeyCode = key => key.toUpperCase().charCodeAt(0);

buttons.forEach(button => {
    button.addEventListener("click", e =>{
        playAudio(button.dataset.key);
    })

    button.addEventListener("transitionend", e =>{
        button.classList.remove("playing");
    })
})

window.addEventListener("keydown", e => playAudio(convertToKeyCode(e.key)));