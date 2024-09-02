const btns = document.querySelectorAll("li");
const photo = document.querySelector(".photo");

btns.forEach((btn, index) => {
  btn.addEventListener("mouseenter", function() {
    let changeImage = this.getAttribute("data-image");
    photo.style.backgroundImage = `url("${changeImage}")`;
    // photo.style.background = `url("./img/portrait-0${index + 1}.jpg") center/cover no-repeat`;
  });

  btn.addEventListener("mouseout", () => {
    // photo.style.backgroundImage = ``;
    photo.style.background  = ``;
  })
});
