// ++ -- :증감 연산자
// > 증감연사자를 사용하는 위치에 따라서 결과값이 
// 완전히 달라진다
// > 증감연산자가 피연산자 앞에 입력되면, 연산작업을
// 먼저 실행
// > 증감연산자가 피연산자 뒤에 입력되면, 연산작업을
// 나중에

// 복합대입 연산자 => 할당 연산자

// 비교연산자
// - 느슨한 연산자
// - 엄격한 연산자
// - 부정 연산자 => !

// 논리 연산자(*참 VS 거짓!!)
// - && :: and연산자
// > 좌항 & 우항 모두 참이어야 최종결과값 true
// > 40대 남성

// - || : or 연산자
// > 좌항 & 우항 둘 중에 하나만 참이어도 true
// > 40대 혹은 남성

// 4. 조건문

// if 문 (*단독으로 여러번 사용 가능)
// > A일 때 무언가!!! 그런데, 그게 아니면 무언가!!!
// > if else 문 (*반드시 조건식 true 여야지만 실행)
// 그렇지 않은 경우 else문 
// > 반드시 조건식 true 여야지만 실행!!!!!
// > else if 문 (*복수의 조건식을 따지고자 할때!)
// > 삼항조건연산자
// > switch문

const num1 = 10;
const num2 = 20;

// let small;

if(num1 < num2) {
  small = num1;
} else {
  small = num2;
}

small = num1 < num2 ? num1 : num2;
console.log(small);

// const x = 10;

// if(x > 5) {
//   console.log(`${x}는 5보다 큽니다!`)
// }

// const userInput = prompt("이름을 입력하세요.");

// if(userInput === null) {
//   alert("취소했습니다.");
// } else {
//   alert(`${userInput}님 환영합니다.`);
// }

const score = Number(prompt("자바스크립트 시험점수!"));

if(score !== null) {
  if(score >= 90) 
    alert("A 학점");
  else if(score >= 80) 
    alert("B 학점");
  else {
    alert("C 학점");
  }
}

// > 프로그래밍 언어
// 실행문 // 표현식문
// > 함수 
// 선언형 // 명령형

// > 프로그래밍 코드 작성 // 실행
// 객체지향 // 절차지향

// let str = "<table border='1'>";
// str += "<tr>"
// str += "</tr>"
// str += "<th>1</th><th>2</th><th>3</th>"
// str += "</table>";


// console.log(str);

// document.write(str);


// let x = 10;
// let y = 4;

// x--;

// console.log(x);

// y++;

// console.log(y);


// let result = x + y;
// console.log(result);

// result = x - y;
// console.log(result);

// result = x * y;
// console.log(result);

// result = x / y;
// console.log(result);

// result = x % y;
// console.log(result);



