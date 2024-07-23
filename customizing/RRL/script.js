// header event
window.addEventListener("scroll", () => {
    let windowScroll = window.scrollY;
    const banner = document.querySelector(".banner");
    const nav = document.querySelector("nav");

    if(windowScroll > 30) {
        banner.classList.add("active");
        nav.classList.add("active");
    } else {
        banner.classList.remove("active");
        nav.classList.remove("active");
    }
});

// main_txt event
const title = "Double RL&Co.";
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

// section event 
window.addEventListener("scroll", function() {
    let Scroll = this.scrollY;
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        if(Scroll >= section.offsetHeight - this.window.innerHeight / 5) {
            section.classList.add("active");
        }
    });
})

// filling text of lookbook's figcation

const fillFigcaption = () => {
    const figcaptions = document.querySelectorAll("figcaption");
    
    figcaptions.forEach((figcaption) => {
        const span = figcaption.querySelector("span");
        
        if(span.className === "men") {
            console.log(span.className)
            span.innerText = `men's`;
        } else {
            span.innerText = `women's`;
        }

        figcaption.querySelector("h3").innerText = `Double RL 24SS`;
        figcaption.querySelector("p").innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates quos neque laborum debitis modi magni animi.`;
    });
};

fillFigcaption();



