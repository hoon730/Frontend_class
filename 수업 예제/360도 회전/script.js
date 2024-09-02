const circle = document.querySelector("#circle");
const article = circle.querySelectorAll("article");
console.log(article);

article.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused"
  })
  el.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running"
  })
});