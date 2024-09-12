// 자료형
// - 문자 / 숫자 / 논리 / 배열 / 객체
// - 논리 : null // undefined
// - null : 유효하지 않은 값
// - undefined : 아직 정의가 되지 않은 값
// - 자료형변환 :
// 1) json 혹은 parameter를 거쳤다가 돌아오는 값 : 문자열
// 2) 숫자 + 문자 => 문자!!!

// 2. 연산자
// - 병합 연산자 : (좌항 ?? 우항) => 좌항 값이 존재하면, 좌항값을 출력 // 만약 좌항값이 존재하지 않으면, 우항의 값을 찾아온다!!!

// 병합연산자
// const numA = 10;
// const numb = 20;
// const numC = undefined;

// console.log(numA ?? numb);

// 삼항조건 연산자
// const strA = "안녕하세요!";

// typeof strA === "string" ? console.log("문자자료형") : console.log("숫자자료형");

// switch문

// const fruit = "apple";

// switch(fruit) {
//   case "apple" :
//   console.log("사과");
//   break;
//   case "banan" :
//   console.log("바나나");
//   break;
//   default:
//     console.log("찾는과일없음");
// }

// 3. 객체
// Object
// let objA = {};
// objA.numA = 1;
// objA["numB"] = 2;
// console.log(objA);

// let objB = new Object();
// console.log(objB);

// console.log(objA.numA);

// 구조분해할당
// const testO = {
//   name: "Hoon",
//   age: 20,
//   skill: "JS",
// };

// const name = testO.name;
// const age = testO.age;
// const skill = testO.skill;

// const { name, age, skill } = testO;

// console.log(name, age, skill);

// - 객체의 값을 반복실행하고자 할 때 : Object.keys => 배열 반환!!!
// const person = {
//   name: "Hoon",
//   age: 20,
//   location: "Seoul",
// };

// // 객체 안에 있는 key값을 배열로 반환
// const keyArrs = Object.keys(person);
// console.log(keyArrs)

// keyArrs.forEach((item) => {
//   let value = person[item];
//   console.log(value);
// });

// 4.배열
// 인덱스 = 0 // length 속성
// - 모든 배열 내 마지막 element = 아이템 인덱스 length - 1;

// 5.단락회로 평가
// 좌항 && 우항 : 좌항부터 값을 체크하는데, 좌항의 값이 true아닌 false의 값을 반환한다면, 우항의 값은 실행하지 x
// 좌항 || 우항 : 비록 좌항의 값이 false를 반환하지만, 만약 우항의 값이 true라면, 좌항의 반환과 상관없이 우항의 값을 실행 o
// - push, pop, shift, unshift, slice, concat, join, find, indexOf,filter, map, sort, reduce

// const calcA = () => {
//   console.log("A");
//   return false;
// };

// const calcB = () => {
//   console.log("B");
//   return true;
// }

// console.log(calcA() && calcB());
// console.log(calcA() || calcB());
// react는 기본적으로 브라우저를 통해서 앱을 여는 순간 => 컴포넌트 무조건 마운트!
// 가상돔 => 영화데이터를 찾아오도록 하는 fetch()
// 정상적으로 fetch()를 통해서 불러오는 영화 api데이터를 찾아오지 못함
// 찾아온 영화데이터를 가지고 약 3000픽셀 높이값을 가지고 있는 브라우저 화면을 채워야하는 상황

// 로딩스피너
// console.log(movieData && data.title);

// 스프레드 연산자 = 전개연산자
// - 객체 및 배열의 값을 병합하고자 할 때, 전개 연산자가 하는 역할 => 객체 및 배열 내 각각의 아이템 요소들을 독립적인 값을 풀어서 가져가는 역할 => 참조 타입 형식의 자료 역시 값을 분리시킬 수 있었던 것이다

// const arrA = [1, 2, 3];
// const arrB = [4, 5, 6];

// const arrC = [arrA, arrB];
// const arrE = [...arrA, ...arrB];

// console.log(arrC, arrE);

// const objA = {
//   a: 1,
//   b: 2,
// };

// const objB = { c: 3 };

// const objC = {
//   ...objA,
// };

// console.log(objC);

// console.log(objC);

// 배열 메서드 특집!!!
// **- push : 특정 배열의 맨끝 부분에 값을 추가하고, 추가된 이후의 새로운 배열의 총개수를 반환하는 함수

// **- pop: 특정 배열에 맨끝 부분의 값을 제거하고, 제거된 값을 반환!

let food = ["짜장면", "피자", "치킨"];
// const newLength = food.push("탕수육");

// console.log(food, newLength);
// const removedItem = food.pop();
// console.log(removedItem);
// console.log(food);

// **- shift : 특정 배열에 맨앞 부분의 값을 제거하고, 제거된 값을 반환

// const removedItem = food.shift();
// console.log(removedItem);
// console.log(food);

// **- unshift: 특정 배열의 맨 앞 부분의 값을 추가하고, 추가된 이후의 새로운 배열의 총 개수를 반환하는 메서드 함수!


// **- slice : 기존 배열에서 특정 범위를 잘라서 "새로운 배열"을 반환!!
// > 인자값 2개 => 첫번째 인자(*인덱스)부터 두번째 인자(*인덱스)이전까지의 값을 잘라서 새로운 배열 반환!!
// > 인자값 1개 => 해당 인자(*인덱스)부터 끝까지 잘라내기

// **- indexOf = 인덱스 값으로 들어온 아이템의 인덱스 값을 찾아주는 메서드 함수
// console.log(food.indexOf("피자"));

// **- includes: 특정 배열에 특정 요소가 있는지 판별 // true , false
// console.log(food.includes("피자"))

// **- find: 특정 배열에서 찾고자 하는 값을 찾아서 해당 값을 반환

// const arr = [
//   {name: "Hoon"},
//   {name: "martin"},
//   {name: "romeo"},
//   {name: "juliet"},
// ]

// const element = arr.find((item) => item.name === "Hoon");
// console.log(element);

// **- filter : 특정 배열에서 어떤 조건에 만족하는 아이템 요소들만 모아서 하나의 새로운 배열로 반환시켜주는 메서드 함수

// const arr = [
//   { name: "슛돌이", hobby: "축구"},
//   { name: "통키", hobby: "피구"},
//   { name: "강속구", hobby: "야구"},
//   { name: "태백산", hobby: "피구"},
// ];

// const filteredArr = arr.filter((item) => {
//   return item.hobby === "피구";
// });

// console.log(filteredArr);

// **- map : 특정 배열 내 아이템들에게 어떤 연산 및 실행문 처리 후 새로운 배열로 반환 시켜주는 함수

// const newArr = arr.map((item) => item.name);
// console.log(newArr);

// **-sort : 특정 배열 내 값을 정렬하고자 할 때 사용하는 메서드 함수
// const arr1 = [10, 5, 3];
// // arr1.sort(a - b);
// // console.log(arr1);
// const compare = (a, b) => {
//   // if(a > b) return 1;
//   // else if (a < b) return -1;
//   // else return 0;
//   a - b
// };

// arr1.sort(compare);
// console.log(arr1)

// join : 특정 배열 내 요소들을 하나의 문자열로 반환 시켜주는 메서드함수(*구분자)

// console.log(food.join("*"));

// **- reduce : 특정 배열 내 요소들을 순회하면서 값을 찾아서 누적 계산해주는 함수

const arr3 = [1, 2, 3, 4 , 5];
const result = arr3.reduce((acc, item) => acc + item, 0);

console.log(result);


// **- concat : 서로 다른 복수의 배열을 하나로 합쳐주도록 하는 메서드 함수
// const newLength = food.unshift("갈비찜");
// console.log(food, newLength)
// const sliced = food.slice(0, 2);
// console.log(sliced);
// const sliced = food.slice(1);
// console.log(sliced);

// const arrA = [1, 2];
// const arrB = [3, 4];

// const arrC = arrA.concat(arrB);
// console.log(arrC)