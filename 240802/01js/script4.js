// form 요소 => form 태그 안에 있는 세부적인 
// 태그들을 모두 지칭하는 표현!!!

// 요소.value
// const button = document.querySelector("input[type='submit']");
// const form = document.querySelector("form");
// console.log(form);
// console.log(button);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // const orderName = document.querySelector("#orderName");
//   const orderName = document.order.orderName;
//   console.log(orderName.value);
// });

// console.log(orderName);

// console.log(document.forms[0].elements[4]);

const select = document.querySelector("#fruits");
// console.log(select.options[1].value);

select.addEventListener("change", function() {
  console.log(this.options);
  const selectedText = this.options[this.selectedIndex].innerText;
  alert(`${selectedText}를 선택하셨습니다! 가격은 5,000원 입니다.`); 
});

// const radioBtn = document.order.userAge;
// console.log(radioBtn);

// const checkBox = document.querySelector("input[name='alarm']:checked");
// console.log(checkBox);

const radioBox = document.querySelectorAll("input[name='userAge']");
console.log(radioBox);

radioBox.forEach((item) => {
  item.addEventListener("change", (e) => {
    const target = e.target;
    console.log(target.value);
    if(target.checked) {
      alert(`당신의 연령은 ${target.value}입니다.`);
    }
  });
});

const checkBox = document.querySelectorAll("input[name='alarm']");
console.log(checkBox)

checkBox.forEach((item) => {
  item.addEventListener("click", (e) => {
    const target = e.target;
    console.log(target.value);
    if(target.checked) {
      alert(`당신의 관심은 ${target.value}입니다.`)
    }
  });
});




