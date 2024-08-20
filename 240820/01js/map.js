// Map & Set
// - 객체, 배열의 장점을 모두 가짐

// let bag = new Map();

// bag.set("color", "red");

// console.log(bag);

let myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"]
]);

console.log(myCup);

// myCup.set("type", "mini");
// myCup.set("purpose", "daily");

myCup.set("type", "mini").set("purpose", "daily");

console.log(myCup);

//메서드 체이닝

// set()
// get()
// size()
// has()
// delete(): 특정 키값만 삭제, 제거
// clear(): 모든 값을 삭제, 제거
// keys()
// values()
// entries

console.log(myCup.get("color"));
console.log(myCup.size);
console.log(myCup.has("colors"));

console.log(myCup, delete("type"));
console.log(myCup);

// console.log(myCup.clear());
// console.log(myCup);

console.log(myCup.keys());
console.log(myCup.values());
console.log(myCup.entries());

for(let key of myCup.values()) {
  console.log(key);
}
for(let key of myCup.entries()) {
  console.log(key);
}


// literable (이터러블)
// literator (이터레이터 객체) => 반복문 사용

// Set은 배열함수의 상위 버젼



