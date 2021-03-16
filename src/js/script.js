
const inputValue = document.querySelector('form input[type="text"]');
const form = document.querySelector("form");
const myTodos = document.getElementById("myTodos");
// 1_ create new todo on submit
//  1a: grab value from text input: const inputValue = querySelect('#InputText).value
//  1b: listen to submit event and addNewTodo: form.addEventListener('submit', addNewTodo(inputValue))
//  1c: clear input value: inputValue = ''
//  1d: prevent form to submit by default: event.preventDefault();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewTodo();
  inputValue.value = "";
});

// 2_ Add new todo to ul
// 2a: create addNewTodo function: const addNewTodo = function() { ... }
// 2b: grab ul element: const listEl = getElementbyId('myTasks)
// 2c: create new todo template: const template = `<li class="todo-item">${inputValue}</li>`
// 3c: add template to ul: listEl.innerHTML += template

const addNewTodo = () => {
  const template = `<li class="list-group-item">${inputValue.value}<span class='edit'> edit </span><span class='delete'> delete</span></li>`;
  myTodos.innerHTML += template;
};

// 1_ Delete
// Add html element "delete" to the li template <span class='edit'>Edit</span> <span class='delete'>-</span>
// Listen to the click event on the delete element
// check if the clicked item is the delete element: https://codetogo.io/how-to-check-if-element-has-class-in-javascript/
// delete item:
// listEl.removeChild() // https://www.w3schools.com/jsref/met_node_removechild.asp
// find parent element https://www.w3schools.com/jsref/met_node_removechild.asp

const deleteElement = (targetItem) => {
  myTodos.removeChild(targetItem.parentElement);
 };

myTodos.addEventListener('click', (event) => {
 console.log(event.target);
 const elementClicked = event.target;
  if (elementClicked.classList.contains("delete")) {
  deleteElement(elementClicked);
}
});
//else if (elementClicked.classList.contains("edit")) {
//    editTask(elementClicked);
//});
const resetButton = document.getElementById('resetList');
resetButton.addEventListener('click', () => {
 myTodos.innerHTML = '';
});
