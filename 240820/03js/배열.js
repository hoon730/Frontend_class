const buttons = document.querySelectorAll(".button");

const dataList = [
  {name: "곰", age: 18},
  {name: "여우", age: 27},
  {name: "사자", age: 32},
  {name: "얼룩말", age: 41},
  {name: "기린", age: 56},
]; 

const updateList = (filterdList) => {
  let listHtml = "";
  filterdList.forEach((data) => {
    listHtml +=  `<li>${data.name} : ${data.age}</li>`;
  });
  document.querySelector(".user-list").innerHTML = listHtml;
}

const onClickButton = (e) => {
  const targetAge = e.target.dataset.age;
  const filterdList = dataList.filter((data) => data.age >= targetAge);
  updateList(filterdList);
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    onClickButton(e) 
  });
});