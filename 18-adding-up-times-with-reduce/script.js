const videos = Array.from(document.querySelectorAll("ul.videos li[data-time]"));

const totalInSeconds = videos
  .map((video) => video.dataset.time)
  .reduce((total, time) => {
    const [minutes, seconds] = time.split(":").map(parseFloat);
    return total + (60 * minutes + seconds);
  }, 0);

const hours = Math.floor(totalInSeconds / 3600);
const minutes = Math.floor((totalInSeconds % 3600) / 60);
const seconds = (totalInSeconds % 3600) % 60;

console.log(`${hours}:${minutes}:${seconds}`);
