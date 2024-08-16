// let pets = ["dog", "cat", "mouse"];
// pets[0] = "hamster";
// console.log(pets);


// 배열 => 이터러블 객체
// 이터레이터 요소!!
// 제너레이터 // map & set
// 반복문

// for // for of // forEach

// 배열 선언 값
// 1) 복수형
// 2) 블록변수 값
// const colors = ["red", "green", "blue", "white","black"];

// for(let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// };

// 초기값// 범위 // 증감

// for(let color of colors) {

// }

// colors.forEach((color, index) => {
//   console.log(`colors[${index}] : ${color}`);
// });

// colors.forEach((color, index, array) => {
//   console.log(`[${array}][${index}] : ${color}`);
// });

// const vegetable = ["양상추", "토마토", "피클"];
// const cheese = ["모짜렐라", "슈래드"]
// const meat = ["불고기"];
// const meatBurger = vegetable.concat(meat);

// // 전개연산자
// const cheeseBurger = [...vegetable, ...cheese,"빵"];
// console.log(cheeseBurger);

// let numbers = [6, 9, 3, 21, 18];
// console.log(numbers);
// console.log(numbers.reverse());

// let week = ["sun", "mon", "tue"];
// let values = [5, 20, 3, 11, 4, 15];

// 1. 배열선언 할때, 변수명 복수
// 2. 일반 for문 선언, 블록변수 0으로 싲가
// 3. 배열을 담는 변수를 선언할 때, const vs let
// => 배열의 특정 메서드 함수를 => 새로운 배열을 생성
// 해주는 메서드 함수
// => 빈배열을 생성 => 값을 추가하는 행위
// console.log(week);
// console.log(week.sort());

// console.log(values);
// console.log(values.sort());

// sort => 개발자가 정의하고자 하는 함수를 콜백함수로
// 반드시 입력

// values.sort((a, b) => {
//   if(a > b) return 1;
//   if(a < b) return -1;
//   if(a === 0) return 0;
// })
// console.log(values);

// values.sort((a, b) => {
//   return a - b;
// });
// console.log(values);

// values.sort((a, b) => {
//   return b - a;
// });

// console.log(values);

// let animals = ["lion", "bear", "bird"];

// console.log(animals);

// animals.pop();

// console.log(animals);

// animals.push("tiger");

// console.log(animals);

// let fruit = ["apple", "pear", "banana"];

// fruit.shift();
// console.log(fruit);

// fruit.unshift("cherry");
// console.log(fruit);


let subjects = ["html", "css", "javascript", "react", "typescript"];

console.log(subjects.splice(2));

let week = ["sun", "mon", "tue", "wen", "thu", "fri", "sat"];

console.log(week.splice(1, 5, "holliday"));

console.log(week);

// splice 두번째 인자값은 아이템의 개수
// splice는 원본 데이터를 변경

let colors = ["red", "green", "blue", "white", "black"];
console.log(colors.splice(2));
console.log(colors.splice(1, 4));

console.assert(colors);