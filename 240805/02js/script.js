const button = document.querySelector("button");
const desc = document.querySelector(".desc")
console.log(button);
button.addEventListener("click", () => {
  desc.classList.toggle("active");
})