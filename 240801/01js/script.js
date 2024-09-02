// 함수 선언 !!
// 함수 매개변수 반드시 꼭 필수x
// 함수를 호출할 때, 매개변수의 자리에 어떤값을
// 전달하고자 한다면, 인수 혹은 인자값 삽입!!!

// 인자 = 매개변수

// 일반함수 혹수 function함수
// function calcSum() {
//   let sum = 0;
//   for(let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지의 더하면 ${sum}입니다.`);
// }

// calcSum();

// 익명함수
// const calcSum = () => {
//   let sum = 0;
//   for(let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지의 더하면 ${sum}입니다.`);
// };

// calcSum();

// 화살표(=> : 화살표 모양이 function 키워드를 대체할 수 있도록) 함수

// function sum(a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result}`);
// }

// sum(1, 2);

// return문
// const num = Number(prompt("숫자를 입력하세요!"));

// function calcSum(n) {
//   let sum = 0;
//   for(let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// };

// alert(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다.}`)

// calcSum(num);

// 5. 함수
// - 일반 function
// - 화살표 함수
// - 매개변수 & 인자값 개념
// > 매개변수는 설정 & 인자값을 받아오지 못했을 경우!!!
// > 미리 매개변수 안에 값을 설정 !!! => 실제 인자값으로 값을 받아오지
// 못했어도 함수 실행에 에러를 발생시키지 않음
// - return : A함수의 결과값을 B라는 함수 혹은 외부에서 찾아서
// 사용할 수 있도록 해주는 명령어!

// function multiple(a, b, c = 10) {
//   console.log(a +  b + c);
// }

// multiple(2, 4);

// 올리브영 프론트엔드 개발자
// 회원가입 => *이름, *나이, 피부타입


// 콜백 함수 Call(*호출)back(*다시) => 재호출!!
// 함수가 호출되는 타이밍을 부모 함수에게 그 권한을 양도
// 함수 안에 함수 => 콜백함수

document.body.innerHTML = `<button id="btn">Click!</button>`;

const button = document.querySelector("#btn");
console.log(button);

function display() {
  alert("클릭했습니다!");
};


button.addEventListener("click", display);



