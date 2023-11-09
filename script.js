const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    }
});

function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="complete">Done</button>
        <button class="delete">Delete</button>
    `;
    taskList.appendChild(taskItem);

    const completeButton = taskItem.querySelector('.complete');
    completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('done');
    });

    const deleteButton = taskItem.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        taskItem.remove();
    });
}
