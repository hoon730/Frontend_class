// 폼 요소(*input태그) 입력될 값 절대 전역요소 
// 찾아올 수 없습니다!!!

//이벤트라는 액션이 발생된 이후에만 value값을 
// 값을 찾아올수 있음

const button = document.querySelector("input[type='button']");
console.log(button);

const showSales = () => {
  const price = document.querySelector("#price").value;
  const rate = document.querySelector("#rate").value;  
  const savedPrice = price * (rate / 100);
  const resultPrice =price -savedPrice;
  const para = document.querySelector("p");


  para.innerText = `상품의 원래 가격은 ${price}원이고 할인율은 ${rate}%입니다. ${savedPrice}원을 절약한 ${resultPrice}원에 구매할 수 있습니다.`;

};

button.addEventListener("click", showSales);