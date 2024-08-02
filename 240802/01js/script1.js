// 시간 내장 함수
// setinterval()
// setTimeout()
// clearInterval()

// this객체를 사용할 때 window, 지칭하는 것이 window

// function greeting() {
//   console.log("안녕하세요!");
// }

// const timer = setInterval(greeting, 2000);

// clearInterval(timer);

// setInterval() : 특정 시간에 맞춰서 무언가 반복적으로 자동 실행하도록 해주고 싶을 때

// clearInterval() : 

// let counter = 0;

// const timer = setInterval(() => {
//   console.log("안녕하세요!");
//   counter++;
//   if(counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// 재귀함수 호출

// let num = 0;

// const testFnc = () => {
//   num++;
//   document.write(num, "<br/>");  
//   if(num === 10) return;
//   testFnc();
// }

// testFnc();


// return => 문장종결
// return 값
// 함수가 어떤 연산작업 => 값을 반환!!
// 연산작업이 완료x => 반환!

// setTimeout(() => {
//   console.log("3초가 지났습니다.")
// }, 3000);


