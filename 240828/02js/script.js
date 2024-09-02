const canvas = document.querySelector("#canvas");
const toolBar = document.querySelector("#toolbar");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolBar.offsetHeight;

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

let startX;
let startY;
let lineWidth = 2;
let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.beginPath();
})

canvas.addEventListener("mousemove", (e) => {
  if(!isDrawing) return;
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.stroke();
});


toolBar.querySelector("#reset").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

toolBar.addEventListener("change", (e) => {
  if(e.target.id === "stroke") ctx.strokeStyle = e.target.value;
  if(e.target.id === "lWidth") lineWidth = e.target.value;
});