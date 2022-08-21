window.addEventListener("load", function () {
  const todoList = document.querySelector(".todo__list");
  const btn = document.querySelector("button");

  function createTodo(text) {
    const li = document.createElement("li");
    li.innerText = text;
    li.classList.add("todo__item");
    li.addEventListener("click", deleteTodo);
    todoList.append(li);
  }

  function deleteTodo() {
    this.removeEventListener("click", deleteTodo);
    this.remove();
  }

  function handleClick() {
    const todoUnput = this.previousElementSibling.value.trim();
    if (todoUnput) {
      createTodo(todoUnput);
      this.previousElementSibling.value = "";
    } else {
      alert("Todo жазыныз");
    }
  }

  btn.addEventListener("click", handleClick);
});
