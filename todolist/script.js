let todoList = document.getElementById("todo-list");
let addItemButton = document.getElementById("add-btn");
let newItemInput = document.getElementById("new-item");

function addListItem() {
  let a = newItemInput.value;
  if (a !== "") {
    let b = document.createElement("li");
    b.innerText = a;
    b.addEventListener("click", completeListItem);
    todoList.appendChild(b);
    newItemInput.value = "";
  }
}

function completeListItem(event) {
  let listItem = event.target;
  listItem.classList.toggle("complete");
}

addItemButton.addEventListener("click", addListItem);