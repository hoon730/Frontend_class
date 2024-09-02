const thumnails = document.querySelectorAll("#thumnails > div");


thumnails.forEach((item, index) => {
    item.addEventListener("click", function() {
        thumnails.forEach((sibling) => {
            if(sibling !== item) {
                sibling.classList.remove("active");
            }
            this.classList.add("active");
        });
        
        const citys = document.querySelectorAll(".city");
        citys.forEach((city) => {
            city.classList.remove("active");
        });

        const backgourndImg = item.getAttribute("data-alt");
        const article = document.getElementById(backgourndImg);
        
        if(article) {
            citys[index].classList.add("active");
            citys[index].style = `background: url('./img/${backgourndImg}.jpg') center/cover no-repeat;`;
        }
    })
});