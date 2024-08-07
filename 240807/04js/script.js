// DOM 응용 및 활용 !!!!
// - DOM안에 요소를 생성 // 제거 // 제어 !!!
// - html 문서안에 있는 모든 요소 = 태그 / 
// 텍스트 / 속성 / 속성값를 객체의 형태로
// 만들어서 자바스크립트 문서에서 보다 효율적으로
// 확인할 수 있도록 하는 것 

// 1) 문서안에 새로운 Node를 생성하고자 할 때
// > createElement("p")

// 2) 특정 태그 형식의 Node안에 입력될 텍스트를 
// 생성하고자 할 때
// > createTextNode("입력하고 싶은 텍스트")

// 3) 특정 노드 요소를 상위 노드에 자식요소로 
// 삽입하고자 할 때  // 무조건 상위노드의 가장 마지막 자식요소로 밖에 삽입
// > 상위노드명appendChild("자식요소 노드")

// 4) 특정 노드에 속성을 생성하고 적용하고자 할 때
// >  속성 생성 : createAttribute("속성명")
// > 생성된 속성 값 적용 : 노드명.value = 속성값

// 5) 특정 노드 중간에 삽입하고자 할 때
// > insertBefore(새로운노드, 기존노드)

// 6) 특정 노드를 삭제하고자 할 때
// > 노드remove()

// 7) 부모노드 요소를 찾을 때 사용하는 속성
// > 노드parentNode

// 8) 부모요소를 기준으로 자식노드 요소를 찾아서 제거하고자 할 때
// > 부모노드 removeChild(자식노드)


const container = document.querySelector(".container");
const newP = document.createElement("p");
const textNode = document.createTextNode("typescript");
newP.appendChild(textNode);
container.appendChild(newP);
console.log(container);

const newP02 = document.createElement("p");
const textNode02 = document.createTextNode("React.js");
newP02.appendChild(textNode02);

container.appendChild(newP02);

const basisNode = document.querySelectorAll("p")[2];

container.insertBefore(newP02, basisNode)

// const target = document.querySelectorAll("p")[0];

// target.addEventListener("click", () => {
//   this.remove();
// });

const items = document.querySelectorAll("p");
items.forEach((item) => {
  item.addEventListener("click", function() {
    this.parentNode.removeChild(this);
  })
});