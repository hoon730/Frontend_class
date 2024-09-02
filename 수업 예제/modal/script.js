const btn = document.querySelector("#open");
const modalBox = document.querySelector("#modal_box");
const close = document.querySelector("#close")
console.log(modalBox);

btn.addEventListener("click", () => {
  modalBox.classList.add("active");
})

close.addEventListener("click", () => {
  modalBox.classList.remove("active");
})


modalBox.addEventListener("click", function() {
  this.classList.remove("active")
})

// function + 선언 & 호출 위치
// Hoisting => 끌어올리다