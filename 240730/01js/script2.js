// 사용자로부터 3개의 값을 받으세요!!
// 교통비, 식대, 음로비
// 위개의 값이 10,000원을 초과한다면 "예산 관리 잘해주세요"
// 위 3개의 값이 10,000원 이하이라면 "예산관리 잘하셨어요"

// const trans = Number(prompt("교통비를 입력해주세요", "ex, 1500원"));
// const food = Number(prompt("식비를 입력해주세요", "ex, 6000원"));
// const bever = Number(prompt("음료비를 입력해주세요", "ex, 2500원"));
// const total = trans + food + bever;

// let result =  10000 <= total;

// result = result ? "예산 관리 잘해주세요" : "예산관리 잘하셨어요";

// alert(result);

let arr = [];

for(let i = 0; i < 3; i++) {
  const usernNum = Number(prompt("교통비, 식대, 음료비 순으로 입력해주세요."));
  arr.push(usernNum);
};

const [traffic, food, drink] = arr;

const sum = traffic + food + drink;

console.log(sum);

if(isNaN(sum) || sum === 0) {
  alert("잘못입력했습니다.");
} else if (sum < 10000) {
  alert("예산관리 잘하셨습니다.");
} else {
  alert("예산관리 잘하세요.");
}

// 1. 변수명
// 2. 자료형
// 3. 연산자
// +-/* : 사칙연산

// % : 나누기 후 나머지값을 찾아오는 연산자
// ++ -- : 증감연산자

// const num1 = Number(prompt("첫 번째 숫자를 입력해주세요."))
// const num2 = Number(prompt("두 번째 숫자를 입력해주세요."))
// const num3 = Number(prompt("세 번째 숫자를 입력해주세요."))

// let min = Math.min(num1, num2, num3);

// let final = 0

// alert(`제일 작은수는 ${min}입니다.`);

// if(num1 < num2 === true) {
//   final = num1
// } else if(num2 < num3) { 
  
// };