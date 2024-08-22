window.onload = function () {
  const userBars = document.querySelectorAll(".user-ber");
  userBars.forEach((bar) => {
    bar.classList.add("active");
  });
};

//let number = 0;
let currentIndex = 0;
const numbers = [22, 63, 15, 0, 0];

const startNumbering = (num) => {
  const percentages = document.querySelectorAll(".percentage");

  for(let i = 0; i <= num; i++) {
    percentages[currentIndex].innerText = `${i}%`;
  }
  
  // let number = 0;
  // const countingNumber = () => {
  //   number++;
  //   console.log(number);
  //   percentages[currentIndex].innerText = `${number}%`;
  //     if(number < num) {
  //       setTimeout(countingNumber, 5);
  //     }
  // }
  // countingNumber();

  // if (number < num) {
  //   setTimeout(startNumbering, 5);
  // }
};

const sendingNumbers = () => {
  numbers.forEach((num) => {
    startNumbering(num);
    currentIndex++;
  });
};

sendingNumbers();

const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const submit = document.querySelector("input[type='submit']");
const ul = document.querySelector(".reviews");
const userId = document.querySelector("#userId");

console.log(submit);

let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (e) => {
  const target = e.target.parentElement;
  target.remove();
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
};

const addItem = (todo) => {
  if (todo.text !== "") {
    const div = document.createElement("div");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    const time = document.createElement("span");
    const resultId = document.createElement("span");

    //time
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    month = month < 10 ? `0${month}` : month;
    date = date < 10 ? `0${date}` : date;

    let hrs = today.getHours();
    let mins = today.getMinutes();

    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;

    resultId.className = "result-user";
    time.innerText = `${year}.${month}.${date} ${hrs}.${mins}`;
    time.className = "result-time";
    span.innerText = todo.text;
    span.className = "result-review";
    button.innerText = "삭제";
    button.addEventListener("click", delItem);
    div.className = "result-review-box";
    li.className = "new-review";

    div.appendChild(resultId);
    div.appendChild(span);
    li.appendChild(div);
    li.appendChild(time);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
    li.email = todo.email;

    // email
        if (userId.value !== "" ) {
          let userName = userId.value.split("@")[0];
          userName = userName.slice(0, 2);
          const domain = userId.value.split("@")[1];
          document.querySelector(
            ".new-review .result-user"
          ).innerText = `${userName}**@${domain}`;
          userId.value = "";
        } 
  }
};

const handler = (e) => {
  e.preventDefault();

  const todo = {
    id: Date.now(),
    text: input.value,
    email: userId.value,
  };

  todos.push(todo);
  addItem(todo);
  save();

  input.value = "";
  userId.value = "";
};

const init = () => {
  //다시 불러올때 객체의 형태로 가져와야 하므로 parse 함수를 사용한다.
  const userTodos = JSON.parse(localStorage.getItem(`todos`));

  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;
  }
};

init();

form.addEventListener("submit", handler);
