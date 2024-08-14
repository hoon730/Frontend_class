const searchBtn = document.querySelector(".fa-magnifying-glass");
const closeBtn = document.querySelector(".close");

searchBtn.addEventListener("click", () => {
  document.querySelector(".modal-search").classList.add("active");
});

const items = document.querySelectorAll(".close, section");

items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".modal-search").classList.remove("active");
  });
});


// search Bar
const searchBar = document.querySelector(".search input[type='text']");
console.log(searchBar);

searchBar.addEventListener("focus", function() {
  this.parentElement.nextElementSibling.style.opacity = "1";
});

searchBar.addEventListener("blur", function() {
  this.parentElement.nextElementSibling.style.opacity = "0";
});


// Accordian Event
const firstContent = document.querySelectorAll(".accordian .content");
firstContent[0].style.display = "block";

const titles = document.querySelectorAll(".title");
titles.forEach((title) => {
  title.addEventListener("click", () => {
    firstContent.forEach((item) => {
      item.style.display = "none";
    });

    titles.forEach((otherTitle) => {
      if(otherTitle !== title) {
        otherTitle.classList.remove("active");
      }
    });

    let  content = title.nextElementSibling;
    if(title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = 'none';
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});