document.querySelectorAll("div.hand").forEach(hand => {
    hand.style.transformOrigin = "100%"
    hand.style.transition = "all 0.05s"
})

const calculateDegreesForHour = hour => hour < 24 ? (hour % 12) * 30 + 90 : -1;
const calculateDegrees = (time, max) => time < 60 ? time * 360 / max + 90 : -1;

const setHourHand = date => {
    document.querySelector("div.hand.hour-hand").style.transform = `rotate(${calculateDegreesForHour(date.getHours())}deg)`;
}

const setMinHand = date => {
    document.querySelector("div.hand.min-hand").style.transform = `rotate(${calculateDegrees(date.getMinutes(), 60)}deg)`;
}

const setSecondHand = date => {
    document.querySelector("div.hand.second-hand").style.transform = `rotate(${calculateDegrees(date.getSeconds(), 60)}deg)`;
}

setInterval(()=>{
    const currentDate = new Date();

    setHourHand(currentDate)
    setMinHand(currentDate)
    setSecondHand(currentDate)
}, 1000)