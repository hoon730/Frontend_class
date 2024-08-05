const btn = document.querySelector("input[type='submmit'] ");
const num1 = document.querySelector("input[type='text'] ");
const num2 = document.querySelector("#num2");
console.log(btn);

let big = 0;

btn.addEventListener("submit", () => {
  let sum = num1 + num2;
  for(let i = 1; i < sum; i++) {
    if(sum % i === 0) {
      big = i;
      let result =  big > i ? big : i;
    }
  }
});