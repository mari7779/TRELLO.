
todoForm.addEventListener('submit', function(event){
    event.preventDefault();

    const newTaskTitle = document.querySelector('#todo-input').value;

    const newTask = document.createElement('p');
    newTask.classList.add('task');
    newTask.innerHTML = `
    <p class="task" draggable="true">${newTaskTitle}</p>
    `;

    const cardLane = document.querySelector('#card-lane');
    cardLane.appendChild(newTask);

    document.querySelector('#todo-input').value = '';

});