// 1. 변수
// 데이터를 담는 바구니
// 연산작업 // document 값 // window 값
// 3개의 키워드를 활용해서 변수 선언
// > var(*가급적 사용 x)
// - 호이스팅 가능
// - hoisting = 끌어올리다
// > let(*차선 고려) : 재선언x & 재할당o
// > const(*최우선 고려) : 재선언 & 재할당x 
// - 변하지않는 고정값 = 상수값
// 선언 = 생성
// 값을 할당
// Not a Number => 자료의 형태 중 하나

// const wrapper = document.getElementById("wrapper");
// console.log(wrapper);

// var y = 20;
// console.log(z);

// const num1 = 1;
// const num2 = 2;

// const sum = num1 + num2;

// console.log(typeof sum);

// const str1 = "1";
// const str2 = "2";

// console.log(typeof str1);

// 2. 자료형
// > 현재 변수안에 혈당된 자료형태를 확인 할 수 있도록 해주는 함수 => typeof()
// - 숫자형 : 숫자!!! = number
// - 문자열 : 문자!!! = string => "" // '' // ``
// > 형변환!!!!
// - 논리형
// - 객체 > -배열, -함수
// - 배열
// - 심벌
// - 함수

const num = 1000;
const str = "원";

const counter = num + str;
console.log(typeof counter);

const num1 = 1000;
const str1 = "2000";

const counter1 = num1 + str1;
console.log(typeof counter1);

prompt("얼마를 원하세요?");