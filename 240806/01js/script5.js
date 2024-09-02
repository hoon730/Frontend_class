// => 모찰창 / 슬라이드

// *모달페이지가 나타나기전 UI작업

// **모다렢이지 자체에 대한 UI작업

// ***모달페이지가 나타나기 전 상황에서 가상클래스를 적용 => script 제어

const opeButton = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
console.log(modalBox);

opeButton.addEventListener("click", function() {
  this.classList.add("btnActive");
  modalBox.classList.add("active");
});

const closeButton = modalBox.querySelector("#profile > button")

closeButton.addEventListener("click", function() {
  opeButton.classList.remove("btnActive");
  modalBox.classList.remove("active");
});

// 1. 최초에 보여줘야하는 UI 디자인
// 2. 모달이 오픈되었을 때 보여줘야하는 UI디자인
// 3. JS를