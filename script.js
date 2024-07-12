let form = document.querySelector("#form");
let taskInput = document.querySelector("#taskInput");
let taskContainer = document.querySelector(".taskContainer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.children.task.value === "") {
    return;
  }else if(!e.target.children.task.value.trim()){return;}
  e.target.children.task.value.trim();

  // console.log(e.target.children.task.value);
  const task = document.createElement("article");
  task.innerHTML = `<article class="taskList">
  <span>${taskInput.value}</span>
  <span class="delete">x</span>
</article>`;

  taskContainer.append(task);
  taskInput.value = "";
  //delete function
  let deleted = document.querySelectorAll(".delete");
  for (i of deleted) {
    i.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
  }
});
