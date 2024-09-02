// 자바스크립트 for문을 활용해서 구구단
// 2단 9단까지 웹브라우저 화면 출력!!!

// 중첩 for

// for(let i = 2; i <= 9; i++) {
//   for(let index = 1; index<= 9; index++){
//     document.write(`${i} x ${index} = ${i * index}`);
//     document.write("<br/>");
//   }
// };
let num = 1;
let t = `<table border=1>`;
for(let i = 1; i <= 5; i++) {
  t += `<tr>`;
  for(let k = 1; k <= 5; k++) {
    t += `<td>${num}</td>`
    num++
  }
  t += `</tr>`;
};

t += `</table>`; 

document.write(t);
