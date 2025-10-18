let searchBtn = document.querySelector(".back");

const enableAnimation = () => {
  searchBtn.addEventListener("click", () => {
    searchBtn.classList.add("active");
    setTimeout(() => searchBtn.classList.remove("active"), 1000);
  });
};

enableAnimation();

let button = document.querySelector(".btn");
let input = document.querySelector(".add-text");
let maindiv = document.querySelector(".your-task");

button.addEventListener("click", addMessage);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    button.classList.add("activate");
    setTimeout(() => button.classList.remove("active"), 1000);
    addMessage();
  }
});

function saveTasks() {
  const tasks = [];
  document.querySelectorAll(".task-box").forEach((box) => {
    const text = box.querySelector(".task").textContent;
    const completed = box.querySelector(".task").classList.contains("checked");
    tasks.push({ text, completed });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  saved.forEach((task) => addMessage(task.text, task.completed));
}


function addMessage(taskText, completed = false) {
  const displaymessageincontainer = () => {
    const content = taskText || input.value;
    if (content === "") return;

    const newContainer = document.createElement("div");
    newContainer.classList.add("task-box");

    const newContainerpara = document.createElement("p");
    newContainerpara.classList.add("task");
    newContainerpara.textContent = content;
    if (completed) newContainerpara.classList.add("checked");

    maindiv.appendChild(newContainer);
    newContainer.appendChild(newContainerpara);

    const newBoxes = document.createElement("div");
    newBoxes.classList.add("boxes");
    newContainer.appendChild(newBoxes);

    const newDeleteButton = document.createElement("p");
    newDeleteButton.classList.add("remove-box");
    newDeleteButton.innerHTML = '<i class="fa-solid fa-x"></i>';
    newBoxes.appendChild(newDeleteButton);

    const newTickButton = document.createElement("p");
    newTickButton.classList.add("tick-box");
    newTickButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    newBoxes.appendChild(newTickButton);

    input.value = "";

    newTickButton.addEventListener("click", () => {
      newContainerpara.classList.toggle("checked");
      saveTasks();
    });

    newDeleteButton.addEventListener("click", () => {
      newContainerpara.classList.add("vanish");
      newBoxes.classList.add("vanish");
      setTimeout(() => {
        newContainer.remove();
        saveTasks();
      }, 1000);
    });

    saveTasks();
  };

  displaymessageincontainer();
}

document.addEventListener("DOMContentLoaded", loadTasks);

