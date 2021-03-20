
const inputValue = document.querySelector('form input[type="text"]');
const form = document.querySelector("form");
const myTodos = document.getElementById("myTodos");
//let isEditable = true;
let todos = [];

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
  isDone: false
};

todos.push(newTodo);
render();
};


const deleteElement = (targetItem) => {
  myTodos.removeChild(targetItem.parentElement.parentElement);
 };

function clearElements() {
  myTodos.innerHTML = "";
}

function render() {
  clearElements();

  todos.forEach((todo) => {
    const template = `<li data-id=${todo.id} class="list-group-item">
    <input class="form-check-input" type='checkbox' checkbox=${todo.isDone} />
    <p class="user__input"
    contenteditable=true>${todo.title}
    </p>
    <div>
    <button type="button" class="btn btn-secondary rounded edit">edit</button>
    <button type="button" class="btn btn-secondary rounded delete">delete</button>
    </div></li>`;
    myTodos.innerHTML += template;
  })
}

myTodos.addEventListener('click', (event) => {
 const elementClicked = event.target;

  if (elementClicked.classList.contains("delete")) {
  deleteElement(elementClicked);
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
  }
}
});

const deleteItem = (elementClicked) => {
  const elementClickedId = elementClicked.parentElement.dataset.id;
  todos = todos.filter((todo, index) => {
    return todo.id !== elementClickedId;
  });
  render();
};

const resetButton = document.getElementById('resetList');
resetButton.addEventListener('click', () => {
 myTodos.innerHTML = '';
});

function clearArray() {
  todos.splice(0, todos.length)
};
