document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("task-form");
  const todoInput = document.getElementById("task-input");
  const todoList = document.getElementById("task-list");

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask(todoInput.value);
    todoInput.value = "";
  });

  function addTask(task) {
    if (task.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(li);
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }
});
