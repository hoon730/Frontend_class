// 객체
// - 객체지향 언어
// - window : 브라우저 객체모델
// - JS : Math // Date() => 내장객체

// 객체생성 => 선언
// - { key : value } => property (*속성)


// const book1 = {
//   title: "자바스크립트",
//   level: "normal",
//   study: "done",
// };

// 객체 안에 담겨있는 데이터를 찾아!!
// 프로퍼티(속성)에 접근 2가지 방법
// 1) 온점표기법
// 2) 대괄호표기법

// console.log(book1.title);
// console.log(book1["level"]);

// book1.study = "ready";

// console.log(book1);

// book1.master = "David";

// console.log(book1);

// JS 어딘가에 Class 생성자 함수를 활용해서 이미
// 누군가가 객체를 만들어 놓았음

// Class 생성자함수를 통해서 이미 생성되어진 요소를
// 가져와서 사용할 떄에는 반드시 new 예약어 + prototype
// 함수를 활용해야 함

// prototype을 통해서 생성된 값을 인스턴스 객체

// 최초에 선언한 변수의 값으로 할당

// let book2 = new Object();
// // console.log(typeof book2);

// book2.title = "타입스크립트";
// book2.author = "김지선";
// book2.bestSeller = "Yes";

// console.log(book2);

// delete book2.bestSeller;

// let book3 = new Array();
// console.log(typeof book3);


// 객체중첩
const student = {
  name: "전진우",
  age: 20,
  favorite: "game",
  score: {
    history: 85,
    science: 90,
    average: function() {
      return (this.history + this.science) / 2;
    },
    like() {
      alert("전지우님은 컴퓨터를 좋아합니다");
    },
  }
}

console.log(student.score.history);
console.log(student.score.average());
console.log(student.score.like());

// 객체 안에 Property 일부로서 탄생된 함수는 method라고 칭한다