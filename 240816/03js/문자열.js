// const str = "hello Sir";
// const arr = ["today", "first", "theday"];

// console.log(str.length);
// console.log(arr.length);

// 1) 특정 위치의 문자에 접근!!! CharAt(위치)
// console.log(str.charAt(4));

// const counting = (string, word) => {
//   let count = 0;
//   for(let i = 0; i < string.length; i++) {
//     if(string[i] === word) count += 1;
//   }
//   return count;
// } 

// const string = prompt("원하시는 문자열을 입력하세요!");
// const word = prompt("그 중 찾고싶은 문자열은 무엇인가요?");

// const result = counting(string, word);

// counting(string, word)

// document.write(`${string}에는 ${word}이라는 알파벳이 ${result}번 사용되었습니다!`);


// indexOf() : 특정문자열을 인자값을 제공 => 해당 문자열의 
// 시작하는 인덱스 값을 찾음

// const str1 = "Good morning, everyone. Beautiful morning. Nice morning";
// console.log(str1.indexOf("morning")); 
// // console.log(str1.indexOf("evening")); 
// // -1은 false값

// let firstIndex = str1.indexOf("morning");
// let secondIndex = str1.indexOf("morning");
// let thirdIndex = str1.indexOf("morning");
// console.log(str1.indexOf("morning", firstIndex + 1));
// console.log(str1.indexOf("morning", secondIndex + 1));


// 3) 특정 문자열로 시작하거나 끝나거나 포함하고 있거나
// startWidth() // endWidth() // inCludes()
// 상기의 해당 조건에 부합하는지 여부 체크할 때 주로 사용!!!
// 조건에 부합하면 true // false

// const str2 = "Hello, everyone.";
// console.log(str2.startsWith("Hello"));
// console.log(str2.startsWith("hello"));
// console.log(str2.startsWith("He"));
// console.log(str2.startsWith("Hello, ev"));

// console.log(str2.startsWith("el", 1));
// console.log(str2.startsWith("o", 4));

// console.log(str2.endsWith("everyone."));
// console.log(str2.endsWith("Everyone."));
// console.log(str2.endsWith("one."));

// ES.6 이전문법
// console.log(str2.indexOf("every") !== -1);
// console.log(str2.includes("every"));

let str3 = "ab cd ef";

//trim = 앞쪽과 뒷쪽에 공백을 없애주는 함수
// console.log(str3.trim());
// console.log(str3.trimStart());
// console.log(str3.trimEnd());

// 회원가입
// 휴대폰입력
// input::text => 010-1234-5678 || 01012345678 || 010-12345678

// const str2 = "Hello, everyone."
// console.log(str2.toUpperCase());
// console.log(str2.toLowerCase());

// 문자열에서 직접 문자를 추출하는 방법
// 사용자가 올바르지 않은 정보값
const str2 = "Good morning";
console.log(str2.length);

// console.log(str2.substring(5));
// console.log(str2.substring(0, 4));

// console.log(str2);

console.log(str2.slice(0,4));
console.log(str2);

// slice() : 음수값을 사용!!
console.log(str2.slice(-5, 12));

const str5 = "Hello everyone";

console.log(str5.split(" "));




