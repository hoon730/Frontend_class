// 원기둥의 부피를 계산
// 원기둥의 밑면적 x 높이 !!
// 원 부피 : 파이 x 반지름 x 반지름

const form = document.querySelector("form");
const result = document.querySelector("#result");

// function Cylinder (diameter, height) {
//   this.diameter = diameter;
//   this.height = height;

//   this.getVolume = function () {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// };

class Cylinder {
  constructor (diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }

  getVolume = function () {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#diameter").value;
  const height = document.querySelector("#height").value;

  if(diameter === "" || height === "" || isNaN == typeof diameter || isNaN == typeof height) 
    result.innerText = "정확한 지름값과 높이값을 입력해주세요";
    else {
      const Cylinder01 = new Cylinder(diameter, height);
      result.innerText = `원지름의 부피는 ${Cylinder01.getVolume()}입니다.`
    }
});

// const Cylinder01 = new Cylinder(8, 10);
// console.log(`원기둥의 부피는 ${Cylinder01.getVolume()}입니다`);

// 상속 : 부모요소 > 자식요소
// 최초 선언한 class 요소를 활용해서 다른 class

// 1) A class : 동물병원
// - 강아지 : 이름 // 나이 // 종 // 주인이름

// 2) B class : 동물병원 
// - 고양이 : 이름 // 나이 // 종 // 주인이름 // 암컷&수컷