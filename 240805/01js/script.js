window.addEventListener("scroll", () => {
  const hashlist = document.querySelector(".hashlist");
  let scrollY = window.scrollY;

  if(scrollY > 310) {
    hashlist.classList.add("active");
  } else {
    hashlist.classList.remove("active");
  }
});

// Touch Event
const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;
const listScrollWidth = hashContent.clientWidth + 200;

// 최초 터치 및 마우스 다운 지점
let startX = 0;

// 현재 이동중인 지점
let nowX = 0;

// 터치 종료 지점
let endX = 0;

// 두번째 터치 지점
let listX = 0;

// clientX : 사용자가 현재 보고있는 device 매체의 너비를 의미

const getClientX = (e) => {
  // const isTouches = e.isTouches ? true : false;
  // return isTouches ? e.touches[0].clientX : e.clientX;
  return e.touches ? e.touches[0].clientX : e.clientX;
};

// matrix(1, 0, 0, 1, -75, 0)
// 1 : x방향의 스케일
// 2 : y방향의 기울기
// 3 : x방향의 기울기
// 4 : y방향의 스케일
// 5 : x축을 기준으로 이동한 거리
// 6 : y축을 기준으로 이동한 거리

const getTranslate = () => {
  // console.log(getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]);
  
  return parseInt(getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`
}

const onScrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX)
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslate();
  if(listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s ease`;
    listX = 0;
  } else if(listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    hashContent.style.transition = `all 0.1s ease`
    listX = listClientWidth - listScrollWidth;
  }
  window.removeEventListener("touchstart", onScrollStart);
  window.removeEventListener("mousedown", onScrollStart);
  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mousemove", onScrollMove);
  window.removeEventListener("touchend",onScrollEnd);
  window.removeEventListener("mouseup", onScrollEnd);
}

const onScrollStart = (e) => {
  startX = getClientX(e);

  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);
  window.addEventListener("touchend",onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd);
};

hashContent.addEventListener("touchstart", onScrollStart);
hashContent.addEventListener("mousedown", onScrollStart);




