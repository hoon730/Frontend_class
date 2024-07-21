const banner = document.querySelector(".banner");

window.addEventListener("scroll", () => {
    let windowScroll = window.scrollY;

    if(windowScroll > 30) {
        banner.classList.add("active");
    } else {
        banner.classList.remove("active");
    }
});

const title = "double rl&co.";
const mainTitle = document.querySelector(".main_txt h3");

const addText = () => {
    for(i = 0; i < title.length; i++) {
        const span = document.createElement("span");
        span.className = "letter";
        span.innerText = title[i];
        mainTitle.appendChild(span);
    }
};

window.onload = function() {
    addText();
    const letter = document.querySelectorAll(".letter");
    
    letter.forEach((text, i) => {
        setTimeout(() => {
            text.classList.add("active");
        }, 60*(i+1));
    });

    const mainPara = document.querySelector(".main_txt p");
    mainPara.classList.add("active");
};


