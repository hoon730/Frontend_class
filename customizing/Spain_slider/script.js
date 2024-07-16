// const thumnails = document.querySelectorAll("#thumnails > div");

// thumnails.forEach((item, index) => {
//     item.addEventListener("click", function() {
//         thumnails.forEach((sibling) => {
//             if(sibling !== item) {
//                 sibling.classList.remove("active");
//             }
//             this.classList.add("active");
//         });
        
//         const citys = document.querySelectorAll(".city");
//         const backgourndImg = item.getAttribute("data-alt");
//         const targetImg = document.getElementById(backgourndImg)
//         const wrapper = document.querySelector(".wrapper");

//         citys.forEach((city) => {
//             city.classList.remove("active")
//         });
        
//         citys[index].style = `background: url('./img/${backgourndImg}.jpg') center/cover no-repeat;`;
//         citys[index].classList.add("active");
//         wrapper.style = `left: ${index * -100}%`
//     })
// });

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
        const backgourndImg = item.getAttribute("data-alt");
        const targetImg = document.getElementById(backgourndImg)
        const wrapper = document.querySelector(".wrapper");

        citys.forEach((city) => {
            city.classList.remove("active")
        });

        wrapper.style = `left: ${index * -100}%`;

        if (targetImg) {
            targetImg.classList.add("active")
            targetImg.style = `background: url('./img/${backgourndImg}.jpg') center/cover no-repeat;`;
        }
    })
});