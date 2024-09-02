// 사용자로부터 수학점수를 받으세요.
// 사용자로부터 국어점수를 받으세요.

// 함수를 사용해서 수학 + 국어 점수의 평균점수를
// 계산하여 알림창을 통해서 출력해주세요.

// const math = Number(prompt("수학점수를 입력해주세요."));
// const language = Number(prompt("국어점수를 입력해주세요."));

// const calc = () => {
//   const result = (math + language) / 2;
//   if(isNaN(math) || isNaN(language)) {
//     alert("다시 입력해주세요.");
//   } else {
//     alert(`평균 점수는 ${result}점 입니다.`);
//   }
// };

// calc();

const arr =["수학", "국어"];

function testAvg() {
  let sum = 0;
  
  for(let i = 0; i < arr.length; i++) {
    sum += Number(prompt(`${arr} 점수는?`));
  }
  
  let avg = sum / arr.length;
  return avg;
}

alert(`평균점수는 ${testAvg()}점 입니다.`);

