
const inputValue = document.querySelector('form input[type="text"]');
const form = document.querySelector("form");
const myTodos = document.getElementById("myTodos");
let todos = JSON.parse(localStorage.getItem('todos')) || [];

render();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewTodo();
  inputValue.value = "";
});

const addNewTodo = () => {
  if (inputValue.value === "") return console.log("Enter a new task");

const newTodo = {
  id: (Date.now() + Math.random()).toString(),
  title: inputValue.value,
  isEditable: true,
  isDone: false,
};

todos.push(newTodo);
save();
render();
 };

 function render() {
   clearElements();

   todos.forEach((todo) => {
     const template = `<li data-id=${todo.id} class='${todo.isDone ? "list-group-item checkedBox" : "list-group-item"}'>
     <input id="checkbox" class="form-check-input" type='checkbox' ${todo.isDone ? 'checked' : null} />
     <p class="user__input"
     contenteditable='${!todo.isDone}'>
     ${todo.title}
     </p>
     <div>
     <button type="button" class="btn btn-secondary rounded delete">delete</button>
     </div></li>`;
     myTodos.innerHTML += template;
   })

 }

myTodos.addEventListener('click', (event) => {
 const elementClicked = event.target;

  if (elementClicked.classList.contains("delete")) {
  deleteItem(elementClicked);
}

  if (elementClicked.tagName.toLowerCase() === 'p') {
  elementClicked.onkeydown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newText = elementClicked.textContent;

      if(elementClicked.textContent.trim().length < 2) {
        return alert("Please enter at least two characters")
      };

      const elementClickedId = elementClicked.parentElement.dataset.id;

      const currTodo = todos.find((todo) => elementClickedId === todo.id);

      currTodo.title = newText;

      currTodo.isEditable = false;
      render();
    }
  };
}

if (elementClicked.tagName.toLowerCase() === "input") {
  const elementClickedId = elementClicked.parentElement.dataset.id;
  const currTodo = todos.find((todo) => elementClickedId === todo.id);

    if (elementClicked.checked === true) {
        currTodo.isEditable = false;
        currTodo.isDone = true;
        console.log("there is a checked element")
        saveAndRender();
} else {
    currTodo.isEditable = true;
    currTodo.isDone = false;
    console.log("this element is not checked")
    saveAndRender();
  }

}
  }
);

//const deleteElement = (targetItem) => {
//  myTodos.removeChild(targetItem.parentElement.parentElement);
//};

function clearElements() {
  myTodos.innerHTML = "";
}





const deleteItem = (elementClicked) => {
  const elementClickedId = elementClicked.parentElement.parentElement.dataset.id;
  todos = todos.filter((todo, index) => {
    return todo.id !== elementClickedId;
  });
  saveAndRender();
};

//const removeDeletedItem = (deletedItemId, todos) => {
//  const indexOfDeletedItem = todos.findIndex((todoInArray.id === deletedItemId));
//  todos.splice(indexOfDeletedItem, 1)
//}


function clearArray() {
  //todos.splice(0, todos.length)
  todos = [];
  saveAndRender();
};

const resetButton = document.getElementById('resetList');
resetButton.addEventListener('click', () => {
 myTodos.innerHTML = '';
 clearArray();
});

function save() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function saveAndRender() {
  save();
  render();
}
