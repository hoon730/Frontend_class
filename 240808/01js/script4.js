const userAnswer = prompt("날짜를 입력해주세요", "2024-07-30");

const now = new Date();
const firstday = new Date(userAnswer);

const passedTime = now.getTime() - firstday.getTime();
const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

console.log(passedTime);

const result = document.querySelector("#result");

result.innerText = `${passedDate}일 연속 달성`;
