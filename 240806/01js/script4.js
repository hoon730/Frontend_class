const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputText = document.querySelector("input[type='text']");
  const word = inputText.value;  
  const count = word.length;
  alert(`입력하신 ${word}의 글자 수는 ${count}입니다`)
});
