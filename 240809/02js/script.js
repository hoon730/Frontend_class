// 내장객체
// - window
// > set형제 함수 (*시간을 다룰 수 있는 요소)

// - Javascript
// > Math

// Math 수학객체 => 함수 !!

// 1. 정적으로 고정되어있는 아이템 요소의 위치를 이동
// - position : absolute

// 2. 수학
// - 삼각비
// - 본조선
// - 동경
// - 빗변
// - 삼각함수
// - sin / cos / tan

// > 프로그래밍 영역
// - 인간의 편의를 위해서 만들어놓은 규칙
// - 시간
// - background-color
// - character.computedStyleMap.backgroundColor
// - 1도 => 동그라미 // 180도
// - radian 호도법
// - (반드시 특정 중심각 = 세타 // 반지름)

// let num = 2.1234;
// let num01 = 2.8765;

// let maxNum = Math.max(10, 5, 8, 30);
// let minNum = Math.min(10, 5, 8, 30);
// let roundNum = Math.round(num);
// let floorNum = Math.floor(num);
// let ceilNum = Math.ceil(num);
// let ranNum = Math.random();
// let piNum = Math.PI;

// document.write(maxNum, "<br>");
// document.write(minNum, "<br>");
// document.write(roundNum, "<br>");
// document.write(floorNum, "<br>");
// document.write(ceilNum, "<br>");
// document.write(ranNum, "<br>");
// document.write(piNum, "<br>");

const character = document.querySelector(".character");

let degree = 0;

const loop = () => {
  const rotation = (degree * Math.PI) / 180;
  const targetX = window.innerWidth / 2 - 50 + 100 * Math.cos(rotation);
  const targetY = window.innerHeight / 2 - 50 + 100 * Math.sin(rotation);

  character.style.left = `${targetX}px`;
  character.style.top =  `${targetY}px`;

  degree += 1;

  requestAnimationFrame(loop);
  console.log(rotation)
};

loop();

//정승제 삼각함수 유튜브..참고 ex) 호도법