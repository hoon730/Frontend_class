const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle {
  constructor (x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.dx = Math.floor(Math.random() * 4) + 1;
    this.dy = Math.floor(Math.random() * 4) + 1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  animate() {
    this.x += this.dx;
    this.y += this.dy;

    if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx
    }

    if(this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy
    }

    this.draw();
  }
}

// const circleOne = new Circle(100, 100, 50, "red");
// const circleTwo = new Circle(200, 200, 20, "blue");
// circleOne.draw();
// circleTwo.draw();

// 객체형태 1개 => 원 1개 생성
// 객체형태 2개 => 원 20개

const objs = [];

for(let i = 0; i < 20; i++) {
  const radius = Math.floor(Math.random() * 50) + 10;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;
  objs.push(new Circle(x,y, radius, color));
}

// objs.forEach((obj, index) => {
//   objs[index].draw();
// })

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 0; i < objs.length; i++) {
    let obj = objs[i];
    obj.animate();
  }
  requestAnimationFrame(update);
}

update();