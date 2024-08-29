const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "#ccc";
ctx.fillRect(100, 50, 100 ,100);

ctx.globalCompositeOperation = "darken";

ctx.fillStyle = "#222";
ctx.beginPath();
ctx.arc(100, 120, 50, 0, Math.PI * 2, false);
ctx.fill();

// destination : 먼저 그려진 도형 || source : 나중에 그려진 도형
// 겹쳐있는 도형 요소들의 그래픽 작업 : 
// globalCompositeOperation => 속성

// source-over : canvas에서 그래픽 요소들의 위치 정렬 기본값! 먼저 입력된 요소는 뒤로, 나주엥 입력된 요소는 앞으로

// source-in : 나중에 그려진 요소를 중심으로 먼저 그려진 도형과 교차되는 부분은 살리고, 그렇지 않은 영역은 투명하게 처리

// source-out : 나중에 그려진 요소와 먼저 그려진 요소의 교차되는 영역은 투명하게 처리, 교차가 되지 않은 source영역은 살리는 방법

// source-atop: 교차지점 살리고, 교차가 되지 못한 destination 영역은 불투명하게 처리

// lighter : source destination 영역의 색상값이 합쳐져서 출력

// darken : source destination 영역의 색상값의 차이만큼 출력

// copy : 나중에 그린 source 요소만 출력
// sor : source/destination 모두 출력, 교차되는 영역, 투명하게 처리