// 9. 객체
// - 내장 = > 어딘가에 이미 저장!!!! 객체:
// - 웹브라우저 (80%) : window
// - 객체 > 함수 (*메서드) + 속성

// - alert() : 알림메세지를 출력
// - confirm() : 예 혹은 아니오의 답을 선택할 수 있도록 하는 함수
// - clearInterval() : setInterval의 기능을 reset하고자 할 때
// - clearTimeout() : setTimeout의 기능을 reset하고자 할 때
// - setTimeout() : 일정 지연시간 이후에 액션을 실행 시키고자 할 때
// - setInterval() : 일정 시간을 기준으로 반복 액션을 실행하고자 할 때
// - fetch() : json등의 외부 데이터를 가져오고자 할 때
// - find() : 특정 요소를 찾고자 할 때
// - focus() : form요소 안에 이벤트 부여를 위해서 사용 
// - prompt() : 사용자한테 어던 값을 받고자 할 때
// - open() : 웹 브라우저 내 어떤 요소를 출력시키고자할 때 사용
// - close() : 웹 브라우저 내 어떤 요소를 닫고자할때 사용

// - innerHeight : 실제 개발자가 작성하는 문서가 출력되어지는 높이 공간 
// - innerWidth : 실제 개발자가 작성하는 문서가 출력되어지는 너비 공간  
// - outerHeight : 문서가 출력되어지는 공간 밖에 즐겨찾기 및 주소창 등의 공간까지 포함한 높이
// - outerWidth : 우측 스크롤바까지 공간까기 포함시킨 너비
// - pageXOffset : 우리가 작성한 문서를 기준을 얼만큼 x축으로 떨어졌는지에 대한 좌표값
// - pageYOffset : 우리가 작성한 문서를 기준을 얼만큼 y축으로 떨어졌는지에 대한 좌표값
// - screenX : 사용자의 모니터를 기준으로 x좌표값
// - screenY : 사용자의 모니터를 기준으로 y좌표값
// - scrollX : 현재 문서상의 x축으로 부터 얼만큼 스크롤이 진행되었는지 체크할 수 있는 좌표값 
// - scrollY : 현재 문서상의 y축으로 부터 얼만큼 스크롤이 진행되었는지 체크할 수 있는 좌표값 
// - localStorage : 로컬 컴퓨터에 임시적으로 데이터를 보관시킬 수 있는 속성(*컴퓨터가 꺼지거나 웹브라우저가 새로고침 되더라도 데이터를 유지 보관)
// - sessionStorage : 로컬 컴퓨터가 실행되고 있는 그 순간에만 일시적으로 데이터를 저장보관 => 웹브라우저가 새로고침되거나
// 컴퓨터나 종료 => 삭제
// - location : 특정 UR페이지로 이동시키고자 할 때 사용하는 속성
// - navigator : 현재 접속한 로컬 컴퓨터의 기본 정보값을 확인 하고자 할 때 사용하는 속성

// - JS (20%)
// - Math
// - Array
// - Map
// - Set


const btn = document.querySelector("button");
window.open("./notice.html", "popup", "width=600 height=500");
btn.addEventListener("click", () => {
});