const todoTitle = document.getElementById("todoTitle");
const addTodo = document.getElementById("addTodo");
const colorPicker = document.getElementById("colorPicker");
const todosDiv = document.getElementById("todos");

let isTodoFinished = false;

addTodo.addEventListener("click", () => {
  let newTodo = document.createElement("div");
  newTodo.classList = "todo container";
  newTodo.style.backgroundColor = `${colorPicker.value}`

  let todoTitleP = document.createElement("p");
  todoTitleP.innerText = `${todoTitle.value}`;

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  deleteButton.classList = "deleteTodo";
  deleteButton.addEventListener("click", (e) => deleteTodo(e));

  let toggleButton = document.createElement("button");
  toggleButton.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
  toggleButton.classList = "toggleTodo";
  toggleButton.addEventListener("click", (e) => toggleTodo(e));

  todosDiv.appendChild(newTodo);
  newTodo.appendChild(todoTitleP);
  newTodo.appendChild(deleteButton);
  newTodo.appendChild(toggleButton);
});

/**
 *
 * @param {MouseEvent} e
 */
function deleteTodo(e) {
  if (e.target.parentNode.className.includes("container")) {
    todosDiv.removeChild(e.target.parentNode);
  } else {
    todosDiv.removeChild(e.target.parentNode.parentNode);
  }
}

function toggleTodo(e) {
  if (!isTodoFinished) {
    isTodoFinished = true;
    if (e.target.localName == "button") {
      e.target.classList.add("finished");
    } else if (e.target.localName == "i") {
      e.target.parentElement.classList.add("finished");
    }
    if (e.target.parentNode.className.includes("todo")) {
      e.target.parentNode.children[0].classList.add("finishedP");
      console.log(e.target.parentNode.children[0]);
    } else {
      e.target.parentNode.parentNode.children[0].classList.add("finishedP");
    }
  } else {
    isTodoFinished = false;
    if (e.target.localName == "button") {
      e.target.classList.remove("finished");
    } else if (e.target.localName == "i") {
      e.target.parentElement.classList.remove("finished");
    }
    if (e.target.parentNode.className.includes("todo")) {
      e.target.parentNode.children[0].classList.remove("finishedP");
      console.log(e.target.parentNode.children[0]);
    } else {
      e.target.parentNode.parentNode.children[0].classList.remove("finishedP");
    }
  }
}
