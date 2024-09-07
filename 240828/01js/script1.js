const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");
// console.log(ctx);

// ctx.font = "60px arial"
// ctx.fillText("HELLO", 50, 70);
// ctx.strokeText("HELLO", 50, 150);

// const img = new Image();
// img.addEventListener("load", () => {
//   ctx.drawImage(img, 0, 0);
// });


// img.onload = function () {
//   ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);
// };

// img.src = "./cat.jpg";

const img = new Image();
img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
};

img.src = "./bird.jpg";

ctx.beginPath();
ctx.arc(500, 350, 150, 0, Math.PI * 2, false);
ctx.clip();


// 특정 이미지를 가져와서 원하는 사이즈 만큼 캡쳐한 후 원하는 위치에 해당 이미지를 출력!!

// (이미지, 캡쳐하고자 하는 x좌표, 캡쳐하자고 하는 y좌표 너비, 높이 출력하고자 하는 x)
