const todoForm = document.getElementById('todo-form')
const cardLane = document.getElementById('card-lane');

todoForm.addEventListener('submit', function(event){
    event.preventDefault();

    const newTaskTitle = document.getElementById('todo-input').value;

    const newTask = document.createElement('p');
    newTask.classList.add('task');
    newTask.innerHTML = `
    <p class="task" draggable="true">${newTaskTitle} 
    <button type="submit">delete</button> 
    </p>
    `;

    const cardLane = document.getElementById('card-lane');
    cardLane.appendChild(newTask);

    document.getElementById('todo-input').value = '';

});