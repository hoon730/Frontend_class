
  window.onload = function() {
    
    const userBars = document.querySelectorAll(".user-ber");
    userBars.forEach((bar) => {
      bar.classList.add("active");
    });
  }
  

const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const ul = document.querySelector(".reviews");

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
}

const addItem = (todo) => {
  if(todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    const time = document.createElement("span");

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    
    let hrs = today.getHours();
    let mins = today.getMinutes();

    // month = (month < 10) ? `0${month}` : month;  
    // date = (date < 10) ? `0${date}` : date;  
    // hrs = (hrs < 10) ? `0${hrs}` : hrs;  
    // mins = (mins < 10) ? `0${mins}` : mins;  

    time.innerText = `${year}.${month}.${date} ${hrs}.${mins}`;
    time.className = "result-time";
    span.innerText = todo.text;
    span.className = "result-review";
    button.innerText = "삭제";
    button.addEventListener("click", delItem);

    li.appendChild(span);
    li.appendChild(time);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
};

const handler = (e) => {
  e.preventDefault();

  const todo = {
    id: Date.now(),
    text: input.value,
  };

  todos.push(todo);
  addItem(todo);
  save();

  input.value = "";

};

const init = () => {
  //다시 불러올때 객체의 형태로 가져와야 하므로 parse 함수를 사용한다.
  const userTodos = JSON.parse(localStorage.getItem(`todos`));

  if(userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;
  }
};

init();

form.addEventListener("submit", handler);
