const barMenu = document.querySelector(".barmenu");

barMenu.addEventListener("click", () => {
  const barSlide = document.querySelector(".barslide");
  barSlide.classList.toggle("active");
  barMenu.classList.toggle("active");
})

