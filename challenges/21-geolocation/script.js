const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
  (position) => {
    console.log(position);
    speed.textContent = position.coords.speed ? position.coords.speed : 0;
    arrow.style.transform = position.coords.heading
      ? `rotate(${position.coords.heading}deg)`
      : "rotate(0deg)";
  },
  (error) => {
    console.error(error);
  }
);
