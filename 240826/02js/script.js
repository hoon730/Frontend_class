const form = document.querySelector("form");
const todoItem = document.querySelector("#todoItem");
const todos = document.querySelector(".todos");

const getLocal = () => {
  let todosContainer;

  if(localStorage.getItem("todos") === null) todosContainer = [];
  else todosContainer = JSON.parse(localStorage.getItem("todos"));

  todosContainer.forEach((todo) => {
    const newLi = document.createElement("li");
    newLi.className = "todo";
    
    const newSpan = document.createElement("span");
    newSpan.className = "todoContent";
    newSpan.innerHTML = todo;
  
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "완료";
    completeBtn.className = "completeBtn";
  
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "삭제";
    deleteBtn.className = "deleteBtn";
  
    newLi.append(newSpan, completeBtn, deleteBtn);
    todos.appendChild(newLi);
    todoItem.value = "";
  });
}

document.addEventListener("DOMContentLoaded", getLocal);

const saveLocal = (todo) => {
  let todos;

  if (localStorage.getItem("todos") === null) todos = [];
  else todos = JSON.parse(localStorage.getItem("todos"));

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (e) => {
  e.preventDefault();

  if(todoItem.value !== "") {
    const newLi = document.createElement("li");
    newLi.className = "todo";
    
    const newSpan = document.createElement("span");
    newSpan.className = "todoContent";
    newSpan.innerHTML = todoItem.value;
  
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "완료";
    completeBtn.className = "completeBtn";
  
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "삭제";
    deleteBtn.className = "deleteBtn";
  
    // newLi.appendChild(newSpan)
    // newLi.appendChild(completeBtn);
    // newLi.appendChild(deleteBtn);
    newLi.append(newSpan, completeBtn, deleteBtn);
    saveLocal(todoItem.value);
    todos.appendChild(newLi);
    todoItem.value = "";
  }
}

const removeLocal = (todo) => {
  let todosItem =
    localStorage.getItem("todos") === null
      ? []
      : JSON.parse(localStorage.getItem("todos"));
  const index = todosItem.indexOf(todo.children[0].innerText);
  console.log(index);
  todosItem.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todosItem))
  todo.remove();
};
const manageTodo = (e) => {
  const whichBtn = e.target.classList[0];
  if (whichBtn === "completeBtn") {
    const todoItem = e.target.parentElement;
    console.log(todoItem);
    todoItem.children[0].classList.toggle("completed");
  } else if (whichBtn === "deleteBtn") {
    const todoItem = e.target.parentElement;
    removeLocal(todoItem);
  }
};
todos.addEventListener("click", manageTodo);
form.addEventListener("submit", addTodo);

const item = {
  text: todos.value,
  id: Date.now(),
  completed: false,
};