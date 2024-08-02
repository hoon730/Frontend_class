const button = document.querySelector("button");
console.log(button);

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.style.transition = "all 0.3s"
  if(document.body.classList.contains("dark")) {
    button.innerHTML = "라이트모드로 바꾸기";
  } else {
    button.innerHTML = "다크모드로 바꾸기";
  }
});





