// form 이벤트
// - change (*select, option, radio) : 다수의 복수 선택지 가운데 특정 하나의 
// 값을 선택하는 경우
// - submit(*input) : input속성값이 submit인 경우, form요소의 이벤트 핸들러로 
// submit 사용 가능
// - click : 버튼 등의 아이템을 클릭했을 때
// - blur : focus와 반대로 커서가 해제되었을 때 발생되는 이벤트
// - focus : input태그 중에서 텍스트값이 입력되어야 하는 상황에서 커서가 클릭
// 되었을 때 이벤트 실행

// > 이벤트를 적용하는 방법
// 1) 인라인 스크립트를 활용한 이벤트 적용 방법
// - 100% 인라인 스크립트 정말 가끔씩 사용
// - 정말 가끔씩 사용
// - 이벤트핸들러

// 2) 이벤트 핸들러를 활용한 이벤트 적용방법
// - 외부스크립트 내 이벤트 핸들러
// - on전치사 붙은 핸들러 이벤트

// 3) addEventListener를 활용한 이벤트 적용 방법
// - ES6문법 가장 나중에 선보이게된 문법



const userId = document.querySelector("#userId");
console.log(userId);

userId.addEventListener("focus", function() {
  this.style.backgroundColor = "pink";
})

userId.addEventListener("blur", function() {
  this.style.backgourndCOlor = "transparent"
})