// 이벤트 버블링 // 캡처링
// - 문서상에서 어떤 이벤트 실행 => 이벤트가 위쪽으로 전파

// 어떤 특정요서에서 이벤트를 실행 => 가장 위쪽 부모로부터
// 가장 밑에 있는 요소까지 순차적으로 실행 => 캡처링

const p = document.querySelector("p");
p.addEventListener("click", () => {
  console.log("p")
});

const section = document.querySelector("section");
section.addEventListener("click", () => {
  console.log("section")
});

const div = document.querySelector("div");
div.addEventListener("click", () => {
  console.log("div")
});


// 웹 브라우저가 실행 => html, js 파싱 (*문서릭으면서,
// 기본적으로 실행될 수 있는 요소 실행)

// function testFnc() {
//   alert("시작");
// };

// testFnc();

const elements = document.querySelectorAll("*");
console.log(elements);

elements.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(`e.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`);
    },
  true
  );
})