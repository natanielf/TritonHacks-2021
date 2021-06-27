const root = document.documentElement;

const breatingIndicator = document.querySelector(".breathing-indicator");
const breathingIndicatorCore = document.querySelector(
  ".breathing-indicator-core"
);
const breathingIndicatorOuter = document.querySelector(
  ".breathing-indicator-outer"
);

const playPauseBtn = document.getElementById("play-pause");
playPauseBtn.addEventListener("click", function () {
  isPaused = !isPaused;
  if (isPaused) {
    playPauseBtn.textContent = "play";
  } else {
    playPauseBtn.textContent = "pause";
  }
  breatheInAndOut();
});

const playPause = () => {
  if (isPaused) {
    breathingIndicatorOuter.setAttribute('class', 'playing');
    breathingIndicatorOuter.removeAttribute('class', 'paused');
  } else {
    breathingIndicatorOuter.setAttribute('class', 'paused');
    breathingIndicatorOuter.removeAttribute('class', 'playing');
  }
};

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
