// Header
window.addEventListener("scroll", () => {
  const Header = document.querySelector("header");
  let scrollY = window.scrollY;
  if(scrollY > 50) {
    Header.classList.add("active");
  } else {
    Header.classList.remove("active");
  }
});

// Trigger
const trigger = document.querySelector(".trigger");

trigger.addEventListener("click", function() {
  const gnb = document.querySelector(".gnb");
  const menus = document.querySelectorAll(".menu a")

  this.classList.toggle("active");
  gnb.classList.toggle("active");

  menus.forEach((menu) => {
    menu.addEventListener("click", () => {
      trigger.classList.remove("active");
      gnb.classList.remove("active");
    });
  });
});

// ScrollTo 
$(".menu a").click(function() {
  $.scrollTo(this.hash || 0, 900);
});


// home slide