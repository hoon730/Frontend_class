// scroll 이동시 banner event
window.addEventListener("scroll", () => {
    let scrolling = window.scrollY;
    const banner = document.querySelector(".ban");

    if(scrolling > 33) {
        banner.classList.add("active");
    } else {
        banner.classList.remove("active");
    }
}); 

// popular_searchedWord event
const rollingCB = () => {
    const prevItem = document.querySelector(".prev");
    prevItem.classList.remove("prev");

    const currentItem = document.querySelector(".current");
    currentItem.classList.remove("current");
    currentItem.classList.add("prev");

    const nextItem = document.querySelector(".next");

    if (nextItem.nextElementSibling == null) {
    const firstItem = document.querySelector(".popular_searchedWord ul li:first-child");
    firstItem.classList.add("next");
    } else {
    nextItem.nextElementSibling.classList.add("next");
    }

    nextItem.classList.remove("next");
    nextItem.classList.add("current");
};

let interval = setInterval(rollingCB, 3000);

const items = document.querySelectorAll(".popular_searchedWord ul li a");
items.forEach((item) => {
    item.addEventListener("mouseover", () => {
    clearInterval(interval);
    });
    item.addEventListener("mouseout", () => {
    interval = setInterval(rollingCB, 3000);
    });
});