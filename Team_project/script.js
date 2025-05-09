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

// list-btn click시 list event
const listBtn = document.querySelector(".list-btn");

listBtn.addEventListener("click", () => {
    const list = document.querySelector(".list");

    listBtn.classList.toggle("active");
    list.classList.toggle("active");
});

// list값 추가
const list = document.querySelector(".list");
const listArray = ["닌텐도", "아이폰", "화장품", "장난감", "영화티켓", "청바지", "슬리퍼", "운동화" ];
const popularList = document.querySelector(".popular-searchedWord ul");


listArray.forEach((item, index) => {
    const li = document.createElement("li");
    const aTag = document.createElement("a");
    const span = document.createElement("span");
    
    if(index === 0) {
        li.classList.add("current");
    } else if(index === 1) {
        li.classList.add("next");
    }  else if(index === listArray.length - 1) {
        li.classList.add("prev");
    }

    span.innerText = `${index + 1}.`;
    aTag.innerText = item;
    aTag.prepend(span);
    li.appendChild(aTag);

    const li2 = li.cloneNode(true);
    
    list.appendChild(li2);
    popularList.appendChild(li);
});

// popular-searchedWord event
const rollingCB = () => {
    const prevItem = document.querySelector(".prev");
    prevItem.classList.remove("prev");

    const currentItem = document.querySelector(".current");
    currentItem.classList.remove("current");
    currentItem.classList.add("prev");

    const nextItem = document.querySelector(".next");

    if (nextItem.nextElementSibling == null) {
    const firstItem = document.querySelector(".popular-searchedWord ul li:first-child");
    firstItem.classList.add("next");
    } else {
    nextItem.nextElementSibling.classList.add("next");
    }

    nextItem.classList.remove("next");
    nextItem.classList.add("current");
};

let interval = setInterval(rollingCB, 3000);

const items = document.querySelectorAll(".popular-searchedWord ul li a");
items.forEach((item) => {
    item.addEventListener("mouseover", () => {
    clearInterval(interval);
    });
    item.addEventListener("mouseout", () => {
    interval = setInterval(rollingCB, 3000);
    });
});

// Channel Talk

(function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();

ChannelIO('boot', {
"pluginKey": "74a5dd3e-fe19-4e42-824f-b19454d1c69e"
});


var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);    
