const todoForm = document.querySelector('#todo-form')
const cardForm = document.querySelector('#card-form');

cardForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const newLaneTitle = document.querySelector('#card-input').value;

    const newLane = document.createElement('div');
    newLane.classList.add('swim-lane');
    newLane.innerHTML = `<h3 class="heading">${newLaneTitle}</h3>
    
    <form id="todo-form">
    <input type="text" placeholder="new todo +" id="todo-input">
    </form>

`;

    const lanes = document.querySelector('.lanes');
    lanes.appendChild(newLane);

    document.querySelector('#card-input').value = '';
});


