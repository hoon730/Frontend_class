let arr = [];

for(let i = 0; i < 3; i++) {
  const numbers = Number(prompt("숫자를 차례로 한 번씩 입력해주세요."));
  arr.push(numbers);
}

const [num1, num2, num3] = arr;

if(num1 + num2 > num3 && num1 + num3 > num2) {
    if(num2 + num3 > num1) {
      console.log("Yes");
    } else {
      console.log("No");
    }
} else {
  console.log("No");
}