// *html 문서 : 웹브라우저

// - fetching : 단계
// > html 문서를 웹브라우저가 전달 받아서 본인이 읽을 수 
// 있는 형태로 변환 시키는 작업

// - parsing 단계
// > html 문서를 웹브라우저가 실제 읽어나가는 단계
// > 반드시 위에서 아래로 (*먼저 작성한 문서를 먼저일고,
// 나중에 작성한 문서를 가장 나중에)
// > div * 5 : postion absolute
// > script 태그를 만나는 순간 !!! => 운명멈춤
// > script 태그를 향해 돌진
// > 동적인 페이지를 개발
// > 클릭 / 마우스 오버
// > html 내 특정 태그 => Node

// 1) body : script => 내부 스크립트

// 2) script 태그 속성 : async // defer

// async : 비동기 처리
// > 동시에 여러가지의 작업 수행
// > 현재 주어진 문제를 해결하면서, 동시에 다른
// 기타요소들을 해결할 수 있는 방식

// - executing 단계 : 실제 웹브라우저가 읽어내려온 문서를 
// 웹브라우저 출력을 실행시키는 단계

// sync : 동기 처리
// > 먼저 실행되고 있는 어떤 문제를 다 처리해야지만,
// 그 다음 문제를 처리 할 수 있는 방식

// defer : 병렬방식으로 html & script를 읽고, 둘 중에 하나가
// 먼저 종료되더라도 일단 기다리고, html, script 모두 다
// 읽게되면 그떄 fetching

// const num01 = 1;
// const Num01 = 2;

// 변수명 선언 시, 유의사항
// 변수명으로는 예약이 사용불가!!
// document // window => 사용 x
// $, _, 영문자 => 변수명 첫단어 가능!!
// 단, 변수명 중간 혹은 마지막에는 숫자 가능
// 변수명은 반드시 대,소문자를 가림

// const numberSum = 3;
// const number_sum = 10;

// 3가지 방식 중 1개
// 1) 카멜표기법 : 낙타
// 2) 스네이크표기법 : 뱀
// 3) 헝가리안표기법 : 단어 대문자



// - 논리형 : 참과 거짓 값 => true || false
// - 기타형 : null // undefined
// > 템플릿 리터럴 문법
// 변수안에 담긴 값 + 문자열 섞어서


// const boolean = true;
// console.log(boolean);

// const text01 = null;
// // 유효하지 않은 값
// const test02 = undefined;
// // undefined => 미정 값

// const name = "현빈";

// const classroom = 201;

// console.log(name +"님"+ classroom + "호 강의실로 오세요!");
// console.log(`${name}님 ${classroom} 호 강의실로 오세요!`);


// - 객체 : 단일값이 아닌 복합적인 데이터 자료를 저장 보관
// - 배열 : 해당 자료형태안에 있는 모든 자식요소들에게 번호를 매길 
// 수 있음 => 해당 번호에 할당된 값만 찾아올 수도 있고, 그 번호에
// 특정 값을 교체해서 넣을 수도 있음 => 자식 요소들이 각각의 번호를
// 가지고 있기 때문에, 배열안에 담겨있는 총 자식들의 개수도 파악
// index 값 : 자식요소들의 순서 번호 => 반드시 0에서부터 시작
// length 값 : 해당 배열안에 담겨있는 총 자식의 개수
// => 무조건 해당 배열의 마지막 자식요소 아이템의 index 값은 배열의
// 전체 총 자녀 개수에서 -1을 한값과 무조건 동일;
// Symbol() : "유일무이한" 값을 생성 및 보관 관리!! 


// const jsBook = {
//   // 속성 : property
//   // key : value
//   title: "지옥에서온 깃허브",
//   pages: 330,
// } ;

// 객체안에 담긴 값을 찾아올 수 있음
// 온점 표기법
// const jsBookTitle = jsBook.title;

// // 대괄호 표기법
// const jsBookPages = jsBook["pages"];


// jsBook.title = "천국에서온 깃허브";
// console.log(jsBook);

// json => javascript object notation

// const arr = ["red", "green", "blue"];

// console.log(typeof arr);

// let test01 = Symbol();
// let test03 = Symbol();

// console.log(test01 === test02);

// let id = Symbol("userId");

// const member = {
//   name: "David",
//   [id]: 12345,
// };

// console.log(member);

// const fncTest = () => {
//   console.log("click");
// }

// 컴퓨터는 cpu : 메모리 공간 제어
// 변수 // 색상 // => 메모리 생성
// 메모리의 가장 최소단위 : 비트
// 비트 : 0, 1로만 표현
// 바이트 : 8개의 비트가 모이면 1바이트 
// 자료형 : 문자 // 숫자
// 숫자 => 무조건 64비트 = 8바이트

// 변수 500개 선언

// 1. 직접 변수영역에 값을 할당하는 경우, 값이 어느 범위가지 
// 변경될지 아무도 예측불가

// 자료형

// 1) 원시타입 =>  : 숫자,문자,논리,심볼,null,undefined

// 2) 참조타입 => 주소값 참조 타입 : 객체, 배열, 함수

// const fruits = ["apple", "banana", "cherry"];
// const favorite = [...fruits];

// favorite[1] = "grape";

// console.log(fruits)


// 문제
// const num1 = 6;
// const num2 = 3;
// const num3 = 9;

// if(num1 < num2 == true){
//   if(num1 < num3 == true) {
//     console.log(num1);
//   } else {
//     console.log(num3);
//   }
// } else {

// }


// 1) 의도적으로 숫자의 형태로 변환
// Number() : 숫자가 아닌 값도 숫자로 바꿈
// parseInt() : 인자값으로 들어온 숫자 정수값으로 
// parseFloat() : 인자값으로 들어온 숫자를 실수값으로 표현 
// => 소수점을 가지고 있는 숫자

// 2) 의도적으로 문자의 형태로 변환!!!
// String() : 모든 값을 싹다 문자열로 바꿈!!!!
// toString() : null, undefined

// 3) 의도적으로 논리값으로 형태를 변환!!!
// Boolean() : 모든 값을 논리값으로 바꿈
// - 존재하는 값을 거의 대부분 true
// - undefined // null // 0

// console.log(Boolean("hi"));


const one = "20";
const two = 10;

const sum = one + two;

// console.log(Number(true));



  

