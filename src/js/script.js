
const inputValue = document.querySelector('form input[type="text"]');
const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewTodo();
  inputValue.value = "";
});

const addNewTodo = function () {
  const myTodos = document.getElementById("myTodos");
  const template = `<li class="todoItem">${inputValue}</li>`;
  myTodos.innerHTML += template;
};
