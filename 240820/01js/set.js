// let numSet1 = new Set();
// console.log(numSet1);

// numSet1.add("one").add("two");

// console.log(numSet1);

let numSet2 = new Set([1, 2, 3]);

console.log(numSet2);

let numSet3 = new Set([1, 2, 1, 3, 1, 5]);

console.log(numSet3);

// add()
// get()
// has()
// delete(): 특정 키값만 삭제, 제거
// clear(): 모든 값을 삭제, 제거
// keys()
// values()
// entries

// literable (이터러블)
// literator (이터레이터 객체) => 반복문 사용

// console.log(numSet3);

const languages = new Set(["JS", "TS", "HTML", "CSS"]);

for(let language of languages.keys()) {
  console.log(language)
}