// 매개변수 & 인자값 => 전개연산자!!!
// : Spread Operator //
// => map // json 데이터 - id 값(*원본 데이터 유지 + 생성된)?
// => 참조탑입 =>
// => 

  // 함수에서 만날 수 있는 전개 연산자 구분

  // const fruits = ["apple", "banna", "grape"];
  // console.log(fruits);

  // function addNum(...numbers) {
  //   let sum = 0;

  //   for(let number of numbers) {
  //     sum += number;
  //   }

  //   return sum;
  // };

  // console.log(addNum(1, 3, 7, 4));

function displayFavorites(first, ...favs) {
  const str = `가장 좋아하는 과일은 ${favs}입니다.`;
  return str;
}

console.log(displayFavorites("사과", "포도", "토마토"));

