//album_image 이벤트

const albumImg = document.querySelectorAll(".album_image");

albumImg.forEach((img) => {
    img.addEventListener("mouseover", () => {
        img.style.transition = "all 0.3s"
        img.classList.add("active");
    });

    img.addEventListener("mouseout", () => {
        img.classList.remove("active");
    });
});


//gnb 스크롤 이벤트

const gnbLi = document.querySelectorAll(".gnb>ul>li");

gnbLi.forEach((li) => {
    li.addEventListener("mouseover", () => {
        const lnb = li.querySelector(".lnb");

        if(lnb) {
            lnb.classList.add("active");
        }
    })

    li.addEventListener("mouseout", () => {
        const lnb = li.querySelector(".lnb");

        if(lnb) {
            lnb.classList.remove("active");

        }
    })
})
// background image change

const bgImgs = ["1st_bg.jpg", "2nd_bg.jpg", "3rd_bg.jpg", "4th_bg.png", "5th_bg.jpg"];

const bgImg = document.querySelector("#album");
bgImg.style.background = `radial-gradient(circle, transparent, rgba(0, 0, 0, 1)), url(./image/${bgImgs[0]}) center/cover no-repeat`;

const albumText = document.querySelector(".album_text");
const albumTit = albumText.querySelector(".album_text_title");
const albumDesc = albumText.querySelector(".album_text_desc");

fetch("./data.json")
.then((response) => response.json())
.then((jsonData) => {
    const [firstData, ...otherData] = jsonData.data;
    console.log(firstData);

    albumTit.innerText = firstData.title;
    albumDesc.innerText = firstData.description;

    albumImg.forEach((img, index) => {
    img.addEventListener("click", (e) => {
        e.preventDefault();
        const { title, description } = jsonData.data[index];
        bgImg.style.background = `radial-gradient(circle, transparent, rgba(0, 0, 0, 1)), url(./image/${bgImgs[index]}) center/cover no-repeat`;
        albumTit.innerText = title;
        albumDesc.innerText = description;
    });
    });
});
