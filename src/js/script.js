
const inputValue = document.querySelector("#newInput");
const form = document.querySelector("#taskAdder");
const template = `<li class="todo-item">${inputValue}</li>`;


const myTodos = document.querySelectorAll("#myTodos");

const addNewTodo = function() {
  form.addEventListener('submit', addNewTodo(inputValue));
  myTodos.innerHTML = template;
};
