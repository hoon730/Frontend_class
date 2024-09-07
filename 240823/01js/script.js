// 1. 자바스크립트 언어 정의
// - 객체지향 프로그래밍 언어
// - 프로토타입 기반 프로래밍 언어
// - 싱글스레드(Thread = 길 // 도로) 방식 프로그래밍 언어
// > 동기처리 방식

// - 멀티스레드

// > 비동기처리 방식
// - 콜백함수
// - 프로미스
// - fetch
// - async & await

// Javascript = 싱글스레드 언어
// 동기처리 방식 처리
// 콜백함수 라는 것을 활용해서 멀티스레드 언어 인것처럼 비동기처리 방식을 활용

// 콜백함수
// Promise
// fetch()
// async & await


// const displayA = () => {
//   console.log("A");
// }

// const displayB = () => {
//   console.log("B");
// }

// const displayC = () => {
//   console.log("C");
// }

// displayA();
// displayB();
// displayC();

// 멀티스레드 => 비동기 방식인것처럼

// const displayA = () => {
//   console.log("A");
// }

// const displayB = () => {
//   setTimeout(() => console.log("B"), 2000)
  
// }

// const displayC = () => {
//   console.log("C");
// }

// displayA();
// displayB();
// displayC();



const displayA = () => {
  console.log("A");
}

const displayB = (callback) => {
  setTimeout(() => {
    console.log("B");
    callback();
  })
}

const displayC = () => {
  console.log("C");
}

displayA();
displayB(displayC);