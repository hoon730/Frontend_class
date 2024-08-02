// 6. DOM
// > html, css (*정적인 구조) + JS (*html, css 를 찾아와서 동적인 기능을 부여)
// > html, css 웹 에디터를 통해서 작성하는 순간 => 객체

// Document Object Model => DOM

// BOM > DOM

// Browser Object Model = BOM (*브라우저 객체 모델)
// => 콘솔 > window

// Document Object Model => DOM (*문서 객첵 모델)
// - DOM Tree
// JS > Node


// html을 통해서 코드 > 태그 => html 문법 속에서 지칭하는 단어!

// JS > Node

// const main = document.querySelector("main");
// // const profile = main.querySelector("#profile");
// const profile = document.getElementById("profile");
// // const h1 = main.querySelector("h1");
// const desc = document.querySelector("#desc");
// const user = document.querySelectorAll(".user");
// const img = document.getElementsByClassName("image");
// const h1 = document.getElementsByTagName("h1");
// console.log(h1);

// getElementById => 메모리의 효율성 극대화!!
// DOM > id
// >객체 속성을 반드시 document로 지정하고 가야한다;
// > querySelector => 전역요소의 모든 node

// user.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("click");
//   });
// })

// 유사배열
// 99% 배열이 가지고 있는 속성!!!
// 유사배열은 배열과 다른 1%

// const desc = document.querySelector("#desc");
// const iu = desc.querySelectorAll(".user")[0].innerText;
// console.log(iu);
// console.log(desc.textContent);

// DOM에서 어떤 Node를 찾아와서 해당 Node 안에 포함된 요소를 가져오고 싶을 때!!!

// 1) innerHTML : html 요소 + text 모든걸 찾아올 때!!
// > DOM에 있는 html 요소 + text 
// 2) innerText : 특정 노드 안에 담긴 text 요소만 찾아옴 !!!
// > HTML 안에 들어가있는 텍스트를 추출해서 텍스트만 출력
// 3) textContent : innerHTML 단계 => html태그만 걷어내는 상태

const title = document.querySelector("#title");
console.log(title);

title.addEventListener("click", function() {
  this.style.backgroundColor = "black";
  this.style.color = "white"
  this.innerText = "나의 프로필";
});

const pfImg = document.querySelector("#profile img");
console.log(pfImg.src);

pfImg.addEventListener("click", function() {
  this.src = "./pf2.png";
});


const firstP = document.querySelector("#desc > p:first-child");
console.log(firstP);

firstP.addEventListener("click", function() {
  this.innerHTML = "이름 : <b>태연</b>"
});

// 가상클래스!!! : 스위치 역할
// > A면 불이켜지고, B면 불이꺼진다
// > 클래스가 적용되어있으면 불이켜지고, 클래스가 사라지면
// 불이 꺼진다

// classList : 특정 노드에 class 여부.유무 체크
// contains : 특정 클래스가 있으면 true / 없으면 false 

const secondP = document.querySelector("#desc > p:nth-child(2)");
console.log(secondP);

secondP.addEventListener("click", function() {
  // this.classList.add("active");
  // if(!this.classList.contains("active")) {
  //   this.classList.add("active");
  // } else {
  //   this.classList.remove("active");
  // }
  this.classList.toggle("active");
});