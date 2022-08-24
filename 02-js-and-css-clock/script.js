document.querySelectorAll("div.hand:not(.second-hand)").forEach(hand => {
    hand.style.transformOrigin = "100%"
})

const calculateDegreesForHour = (hour, minute) => hour <= 24 ? (hour % 12) * 30 + minute / 60 * 30 + 90 : -1;
const calculateDegreesForMinute = (minute, second) => minute <= 60 ? minute * 6 + second / 60 * 6 + 90 : -1;
const calculateDegreesForSecond = second => second <= 60 ? second * 6 + 90 : -1;

const setHourHand = date => {
    document.querySelector("div.hand.hour-hand").style.transform = `rotate(${calculateDegreesForHour(date.getHours(), date.getMinutes())}deg)`;
}

const setMinHand = date => {
    document.querySelector("div.hand.min-hand").style.transform = `rotate(${calculateDegreesForMinute(date.getMinutes(), date.getSeconds())}deg)`;
}

const setSecondHand = date => {
    console.log(date)
    // console.log(date.getSeconds())
    document.querySelector("div.hand.second-hand").style.transform = `rotate(${calculateDegreesForSecond(date.getSeconds())}deg)`;
}

setInterval(()=>{
    const currentDate = new Date();

    setHourHand(currentDate)
    setMinHand(currentDate)
    setSecondHand(currentDate)

    const audio = document.querySelector(`audio[data-key="76"]`);
    audio.currentTime = "0";
    audio.play();
}, 1000)