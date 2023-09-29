const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', addTodo);
inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
function addTodo() {
    const taskText = inputField.value.trim();
    if (taskText) {
        const paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = taskText;

        paragraph.addEventListener('dblclick', () => {
            toDoContainer.removeChild(paragraph);
        });

        toDoContainer.appendChild(paragraph);
        inputField.value = "";
    }
}

