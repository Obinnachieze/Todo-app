const todo = (button) => {
  document.body.innerHTML = `
     <div id="container">
     <h1>Todo List</h1>
      <input type="text" id="todo-input" />
      <label for="todo-input"></label>
      <button id="add-button">${button}</button>
      <ul id="todoList"></ul>
    </div>
  `;
  const addButton = document.getElementById("add-button");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todoList");

  addButton.addEventListener("click", () => {
    const todoText = todoInput.value.trim();
    todoList.innerHTML += `<li>${todoText}</li>`;
    todoInput.value = "";
  });
  todoList.addEventListener("click", (e) => {
    if (e.target.tagName === "li") {
      e.target.classList.toggle("completed");
    }
  });
};
todo("ADD");
