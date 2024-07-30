// 사용자에게 화씨온도를 받아서 콘솔창에서 
//해당 온도를 섭씨온도로 변환했을 때의 값을 축력해주세요!!!

// const num = parseFloat(prompt("화씨 온도를 입력해주세요.","ex. 45")); 

// const temperature = ((num - 32) / 1.8).toFixed(2);

// alert(`화씨온도 ${num}는 섭씨온도 ${temperature}입니다`);


// 사용자의 몸무게가 적정체중인가?
// 적정체중 = (본인의 키 -100) * 0.9 => 오차범위 5

const name = prompt("이름을 말씀해주세요!", "ex.홍길동");
const height = parseFloat(prompt("키가 어떻게 되시나요?", "ex.182.4"));
const weight = parseFloat(prompt("몸무게를 말씀해주세요!", "ex.54.7"));

const normalWeight = (height - 100) * 0.9;
let result = weight >= normalWeight - 5 && weight <= normalWeight + 5;

result = result ? "적정체중입니다." : "적정체중이 아닙니다.";

alert(`${name}님은 ${result}`);
