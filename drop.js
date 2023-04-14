//atividade

const cardLane = document.getElementById("card-lane");
const todo = document.getElementById("todo-form");
const input = document.getElementById("todo-input");

todo.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;

    if (!value) return;

    const newTask = document.createElement("p");
    newTask.classList.add("task");
    newTask.setAttribute("draggable", "true");
    newTask.innerText = value;

    newTask.addEventListener("dragstart", () => {
        newTask.classList.add("is-dragging");
    });


    newTask.addEventListener("dragend", () => {
        newTask.classList.remove("is-dragging");
    });

    cardLane.appendChild(newTask);

    input.value = "";
});
