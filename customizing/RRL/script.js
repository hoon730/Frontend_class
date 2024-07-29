// header, gototop event 
const goToTop = document.querySelector(".gototop");

window.addEventListener("scroll", () => {
    let windowScroll = window.scrollY;
    const banner = document.querySelector(".banner");
    const nav = document.querySelector("nav");

    if(windowScroll > 30) {
        banner.classList.add("active");
        nav.classList.add("active");
        goToTop.classList.add("active")
    } else {
        banner.classList.remove("active");
        nav.classList.remove("active");
        goToTop.classList.remove("active")

    }
});

// barmenu click event

const barmenu = document.querySelector(".barmenu");

barmenu.addEventListener("click", () => {
    const gnb = document.querySelector(".gnb");

    barmenu.classList.toggle("active");
    gnb.classList.toggle("active")
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
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function() {
    let Scroll = this.scrollY;

    sections.forEach((section) => {
        if(Scroll >= section.offsetHeight - this.window.innerHeight / 5) {
            section.classList.add("active");
        }
    });
})

// making lookbook's figure  

fetch("./lookbook.json").then((responseLookbook) => responseLookbook.json()).then((lookbookData) => {
    console.log(lookbookData.data);
    lookbookData.data.forEach((info, index) => {
        const lookbook = document.querySelector(".lookbook");
        const figure = document.createElement("figure");
        figure.className = `box${index + 1} box`;
        figure.innerHTML = `
            <img src="${info.img}" alt="lookbook${index + 1}">
            <figcaption>
                <span class="${info.gender}">${info.gender}</span>
                <h3>Double RL 24SS</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates quos neque laborum debitis modi magni animi.</p>
                <a href="#none">explore <i class="fa-solid fa-arrow-right-long"></i></a>
            </figcaption>
        `;
        lookbook.appendChild(figure);
    });
});

// making item's each slide

// fetch("./item.json").then((responseItem) => responseItem.json()).then((itemData) => {
    
//     itemData.data.forEach((item) => {
        
//         const mySlider = document.querySelector(".mySlider");
        
//         const img = document.createElement("img");
//         const src = document.createAttribute("src");
//         const alt = document.createAttribute("alt");
//         const itemImg = document.createElement("div");
        
//         src.value = item.img;
//         alt.value = item.alt;
//         img.setAttributeNode(src);
//         img.setAttributeNode(alt);
//         itemImg.appendChild(img);
//         itemImg.className = "item_img";

//         const span = document.createElement("span")
//         const p = document.createElement("p")
//         const itemDesc = document.createElement("div");

//         span.innerText = item.name;
//         p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam rerum voluptas optio sit asperiores esse quia numquam explicabo ";
//         itemDesc.append(span, p);
//         itemDesc.className = "item_desc";


//         const div = document.createElement("div");

//         div.append(itemImg, itemDesc);
//         mySlider.appendChild(div);
//     });
// });

// scrollTO event

const menu = document.querySelectorAll(".gnb li");

menu.forEach((li, index) => {
    li.addEventListener("click", () => {
        window.scrollTo({top:sections[index].offsetTop, behavior: "smooth"});
    });
});

goToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({top:0, behavior:"smooth"});
});



// Slick Slider
$(".mySlider").slick({
    arrows : true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        },
    },
    {
        breakpoint: 600,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        },
    },
    {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        },
    },
    ],
});

// kakao map
const bannerBtn = document.querySelector(".banner_btn");
bannerBtn.addEventListener("click", () => {
    const kakaoMap = document.querySelector("#map");
    const kakaoMapBg = document.querySelector("#main");

    kakaoMap.classList.toggle("active");
    kakaoMapBg.classList.toggle("on");
});

const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Kakao Map
    const container = document.querySelector("#map");
    const options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // Olive Store Info
    const positions = [
    {
        title: 'RRL 가로수길점', 
        latlng: new kakao.maps.LatLng(37.5199672, 127.0228613),
        address: "서울시 강남구 강남대로 320",
        info: "영업시간 : 오전 8시 ~ 저녁 10시",
    },
    {
        title: 'RRL 현대무역센터점', 
        latlng: new kakao.maps.LatLng(37.5086154, 127.0597808),
        address: "서울시 강남구 강남대로 374",
        info: "영업시간 : 오전 9시 ~ 저녁 9시",
    },
    {
        title: 'RRL 파주아울렛점', 
        latlng: new kakao.maps.LatLng(37.7691847, 126.6970148),
        address: "서울시 서초구 서초대로 78길",
        info: "영업시간 : 오전 9시 ~ 저녁 9시",
    },
    {
        title: 'RRL 시흥아울렛점',
        latlng: new kakao.maps.LatLng(37.379779, 126.7371423),
        address: "서울시 서초구 서초대로 314",
        info: "영업시간 : 오전 9시 ~ 저녁 8시",
    },
    ];

    for (let i = 0; i < positions.length; i++) {
        let marker = new kakao.maps.Marker({
        map: map,
        position: positions[i].latlng,
    });

        const content = `
        <div class="wrap">
            <div class="info">
                <div class="title">${positions[i].title}</div>
                <div class="body">
                    <div class="img">
                        <img src="${positions[i].img}" width="73" height="70">
                    </div>
                    <div class="desc">
                        <div class="ellipsis">${positions[i].address}</div>
                        <div class="jibun ellipsis">${positions[i].info}</div>
                        <div><a href="https://www.oliveyoung.co.kr/" target="_blank" class="link">쇼핑몰 바로가기</a></div>
                    </div>
                </div>
            </div>
        </div>`;

        const overlay = new kakao.maps.CustomOverlay({
            content: content,
            map: map,
            position: marker.getPosition(),
        });
    }

    // Kakao Marker
    const markerPosition = new kakao.maps.LatLng(latitude, longitude);

    const marker = new kakao.maps.Marker({
        position: markerPosition,
    });

    marker.setMap(map);

    // Kakao Marker InfoWindow
    const iwContent = `<div class ="label"><span class="left"></span><span class="center">🎈현재위치</span><span class="right"></span></div>`;
    const iwPosition = new kakao.maps.LatLng(latitude, longitude);
    const infowindow = new kakao.maps.CustomOverlay({
        content: iwContent,
        position: iwPosition,
    });

    infowindow.setMap(map);
};

    const errorPosition = (err) => {
    alert(err.message);
};

navigator.geolocation.getCurrentPosition(showPosition, errorPosition);



// const positions = [
//     {
//         title: 'RRL 가로수길점', 
//         latlng: new kakao.maps.LatLng(37.5199672, 127.0228613)
//     },
//     {
//         title: 'RRL 현대무역센터점', 
//         latlng: new kakao.maps.LatLng(37.5086154, 127.0597808)
//     },
//     {
//         title: 'RRL 파주아울렛점', 
//         latlng: new kakao.maps.LatLng(37.7691847, 126.6970148)
//     },
//     {
//         title: 'RRL 시흥아울렛점',
//         latlng: new kakao.maps.LatLng(37.379779, 126.7371423)
//     }
// ];