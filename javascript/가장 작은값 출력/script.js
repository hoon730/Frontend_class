// const num1 = Number(prompt("첫번째 값을 입력해주세요.", "ex) 8"));
// const num2 = Number(prompt("두번째 값을 입력해주세요.", "ex) 8"));
// const num3 = Number(prompt("세반째 값을 입력해주세요.", "ex) 8"));

// let result1 = num1 < num2 ? num1 : num2;
// let result2 = result1 < num3 ? result1 : num3;

// alert(result2);

let arr = [];

for(let i = 0; i < 3; i++) {
    const inputNumber = Number(prompt("숫자를 차례로 3번 입력해주세요", "ex) 8"));
    arr.push(inputNumber);
};

const [num1, num2, num3] = arr;

let comparing = num1 < num2 ? num1 : num2;
let result = comparing < num3 ? comparing : num3;

if(isNaN(result) || result === null) {
    alert("잘못입력하셨습니다.");
} else {
    alert(`제일 작은 수는 ${result}입니다.`);
};