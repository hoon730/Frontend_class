const startBtn = document.getElementById("startBtn");
const video = document.getElementById("preview");

const handleStop = () => {
  startBtn.innerText = "Start Recording";
  startBtn.removeEventListener("click", handleStop);
  startBtn.addEventListener("click", handleStart);
};

const handleStart = () => {
  startBtn.innerText = "Stop Recording";
  startBtn.removeEventListener("click", handleStart);
  startBtn.addEventListener("click", handleStop);

  const recorder = new MediaRecorder();
};

const init = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: { width: 200, height: 200 },
  });
  video.srcObject = stream;
  video.play();
  console.log(stream);
};

init();

startBtn.addEventListener("click", handleStart);
