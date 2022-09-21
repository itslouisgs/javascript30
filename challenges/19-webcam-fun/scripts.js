const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

const getVideo = () => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((error) => console.error(error));
};

const paintToCanvas = () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    let pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    pixels = rgbSplit(pixels);

    ctx.putImageData(pixels, 0, 0);
  }, 16);
};

const takePhoto = () => {
  snap.currentTime = 0;
  snap.play();

  const image = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = image;
  link.setAttribute("download", "selfie");
  link.innerHTML = `<img src="${image}" alt="Handsome Man" />`;
  strip.insertBefore(link, strip.firstChild);
};

const rgbSplit = (pixels) => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0];
    pixels.data[i + 500] = pixels.data[i + 1];
    pixels.data[i - 550] = pixels.data[i + 2];
  }
  return pixels;
};

video.addEventListener("canplay", paintToCanvas);
