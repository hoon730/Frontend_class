// Header Nav
const goToTop = document.querySelector(".gototop");
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  const header = document.querySelector("header");
  console.log(goToTop)

  if(scroll > 50) {
    header.classList.add("active");
    goToTop.classList.add("active")
  } else {
    header.classList.remove("active")
    goToTop.classList.remove("active")
  }
});

goToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({top:0, behavior:"smooth"});
});


// Trigger
const trigger = document.querySelector(".trigger");
const gnb = document.querySelector(".gnb");
const gnbLinks = gnb.querySelectorAll("a");

trigger.addEventListener("click", function() {
  gnb.classList.toggle("active");
  this.classList.toggle("active");
});

gnbLinks.forEach((link) => {
  link.addEventListener("click", () => {
    trigger.classList.remove("active");
    gnb.classList.remove("active");
  })
});

// Slick Slider
$(".myslider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

