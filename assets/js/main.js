let isPaused = false;
const root = document.documentElement;

const breathingIndicatorOuter = document.querySelector(
  ".breathing-indicator-outer"
);

const playPauseBtn = document.getElementById("play-pause");
playPauseBtn.addEventListener("click", function () {
  isPaused = !isPaused;
  breathingIndicatorOuter.style.animationPlayState = isPaused
    ? "paused"
    : "running";
  playPauseBtn.innerHTML = isPaused ? "play" : "pause";
});

const speedLabel = document.querySelector(".speed-label p");

const speedInputSlider = document.getElementById("speed-input");
let speed = speedInputSlider.value;
root.style.setProperty("--animation-length", speed + "s");
speedLabel.innerHTML = "speed: " + speed + "s";

speedInputSlider.addEventListener("input", function () {
  speed = this.value;
  root.style.setProperty("--animation-length", speed + "s");
  speedLabel.innerHTML = "speed: " + speed + "s";
});
