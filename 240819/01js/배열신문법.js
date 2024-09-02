// 1. 매개변수 기본값

// const hello = (name, message = "안녕하세요!") => {
//   console.log(`${name}님 ${message}`)
// };

// hello("원빈",);

// 2. 전개연산자

// 1) 함수의 매개변수
// const addNum = (...numbers) => {
//   let sum = 0;

//   for(let number of numbers) {
//     sum += number
//   }
//   return sum;
// };

// console.log(addNum(1, 2, 3, 4, 5));

//****중요*****/
// 2) 참조타입 변수값의 독립화
// const fruits = ["apple", "banana", "cherry"];
// const favorite = [...fruits];

// console.log(favorite, fruits);

// 3) 서로다른 2개의 배열을 하나로 병합
// const animal = ["bird", 'cat'];

// const fruits = ["melon", "fineapple"];
// console.log(animal.concat(fruits));
// console.log([...animal, ...fruits]);

// 3. 객체 key 접근법
// 대괄호 표기법

// const book = {
//   title : "Javascript",
//   pages : 500,
// }

// book.published = "2024-08-19";

// console.log(book["title"]);

// 객체 키 생성 방법

// const fn = () => {
//   return "result";
// };

// const add = (a, b) => {
//   return  a + b;
// }

// const obj = {
//   [fn()]: " 함수 키",
//   [`${add(10, 20)} key`]: "계산 키",
// };

// console.log(obj);

// 4) 구조분해할당, 전개연산자 구문
// let [teacher, ...student] = ["kim", "lee", "park", "choi"];
// console.log(teacher, student);


/*** 중요 ***/
// 객체 축약법

// let user = {
//   name: "슛돌이",
// }

// user.age = 25;

// console.log(user);

// 객체 선언 시, key 네이밍 === value값으로 할당하고자 하는
// 매개변수의 이름이 동일

// const makeUser = (name, age) => {
//   return {
//     name,
//     age,
//   }
// };

// const user1 = makeUser("영심이", 20);

// console.log(user1);

// 객체에 심벌키 사용법

// let id1 = Symbol();
// let id2 = Symbol();

// console.log(id1 === id2);

// const id = Symbol("id");
// const tel = Symbol("telephone number");

// const member = {
//   name: "Hoon",
//   age: 20,
//   [id]: 1234,
//   [tel]: () => {
//     prompt("당신의 전화번호는?")
//   }
// }

// console.log(member);

// for(let item in member) {
//   console.log(`${item}`);
// }

// 객체 안에 key값을 은폐하고자 싶을 때 사용가능
/*** 중요 ***/
// console.log(member[id]);
// console.log(member[tel]());


// 4. 구조분해 할당
// JS 컴포넌트화 => 함수형 // Class

const fruit02 = ["사과", "복숭아"];
// const apple = fruit02[0];
// const peach = fruit02[1];

const [apple, peach] = fruit02;

console.log(apple, peach);


const member03 = {
  name: "Hoon",
  age: 26,
}

const {name: userName, age} = member03;
console.log(userName, age);

// 5. 배열 메서드
// map // filter // reduce

// map : 배열안에 있는 아이템(*요소)들에게 특정 함수 안에 있는 기능을
// 동일하게 실행, 적용 => 새로운 배열로 다시 생성