// 7. Event

// 이벤트 종류
// window 객체 주로 사용되는 이벤트
// - load : html에서 작성된 문서가 정상적으로 로드가 된다면!!!
// - resize : 문서 화면의 크기가 바뀐다면 이벤트를 실행 
// - scroll : 문서 내 스크롤이 이동

// mouse 이벤트
// - click : 마우스 좌측 버튼을 눌렀다가 떼어야지만 
// - dbclick : 마우스 좌측 버튼을 연타로 클릭하는 경우
// - mousedown : 마우스 좌측 버튼을 누르고 있는 상태
// - mousemove : 마우스 버튼이 눌려진 상태에서 이동
// - mouseup : 마우스 좌측 버튼을 떼는 경우

// *이벤트 버블링 : 웹 문서에서 이벤트가 발생되었을 때,
// 기본적으로 이벤트가 발생된 지점의 부모요소로 이벤트가 전파되는 현상

// *이벤트 켑쳐링 : 이벤트 버블링과 반대로 이벤트 
// 최고 부모요소에서 자식요소로 거꾸로 내려오는 속성

// (*이벤트 버블링 적용 => 마케팅 요소 // 코드 효율)
// - mouseover : 특정요소에 마우스를 올렸을 때
// - mouseout : 특정요소에서 마우스가 나왔을 때

// (*이벤트 버블링 적용x => 특정 요소에만 이벤트)
// - mouseenter : 특정요소에 마우스를 올렸을 때
// - mouseleave : 특정요소에서 마우스가 나왔을 떄

// window.addEventListener("load", alert("즐거운 화요일"))

const overout = document.querySelectorAll(".overout");
const enterleaver = document.querySelectorAll(".enterleaver");
let i = 0;
console.log(overout);

overout.forEach((item, index) => {
  if(index === 0) {
    item.addEventListener("mouseover", function() {
      this.querySelector("p:first-of-type").innerText = "mouseover";
      this.querySelector("p:last-of-type").innerText = ++i
    });
    item.addEventListener("mouseout", function() {
      this.querySelector("p:first-of-type").innerText = " mouseout";
    });
  }  
});

enterleaver.forEach((ele, i) => {
  if(i === 0) {
    ele.addEventListener("mouseenter", function() {
      this.querySelector("p:first-of-type").innerText = "mouseenter";
      this.querySelector("p:last-of-type").innerText = ++i
    });
    ele.addEventListener("mouseleave", function() {
      this.querySelector("p:first-of-type").innerText = " mouseleave";
    });
  }  
});