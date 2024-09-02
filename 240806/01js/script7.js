// 슬라이든는 최초의 브라우저 마운트가 되었을 때, 0번째 슬라이드부터 시작!!!

const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");

const videos = ["mv-1.mp4", "mv-2.mp4", "mv-3.mp4"];

const newVideo = document.createElement("video");
const srcVideo = document.createAttribute("src");
const widthVideo = document.createAttribute("width");
const autoPlayVideo = document.createAttribute("autoplay");

srcVideo.value = `./videos/${videos[0]}`;
widthVideo.value = "700";

newVideo.setAttributeNode(srcVideo);
newVideo.setAttributeNode(widthVideo);
newVideo.setAttributeNode(autoPlayVideo);
container.appendChild(newVideo);

newVideo.addEventListener("click", function() {
  if(this.paused) {
    this.play();
  } else {
    this.pause();
  }
});

let i = 0;

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if(e.target.id === "right") {
      i++;
      if(i > videos.length) {
        i = 0;
      }
    } else if (e.target.id === "left") {
      i--;
      if(i < 0) {
        i = videos.length - 1;
      }
    }
    srcVideo.value = `./videos/${videos[i]}`;
  });
});

