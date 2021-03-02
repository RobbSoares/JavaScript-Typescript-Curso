const inputTask = document.querySelector('.new-task');
const btnTask = document.querySelector('.add-task');
const tasks = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('li');
    return li;
}

inputTask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createEraseButton(li) {
    li.innerText += ' ';
    const eraseButton = document.createElement('button');
    eraseButton.innerText = 'Apagar'
    // eraseButton.classList.add('erase');
    eraseButton.setAttribute('class', 'erase');
    eraseButton.setAttribute('title', 'Apagar tarefa');
    li.appendChild(eraseButton);
}

function createTask(inputText) {
    const li = createLi();
    li.innerHTML = inputText;
    tasks.appendChild(li);
    clearInput();
    createEraseButton(li);
    saveTasks();
}

btnTask.addEventListener('click', function (e) {
    if (!inputTask.value) return;
    createTask(inputTask.value);
});


document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('erase')) {
        el.parentElement.remove();
        saveTasks();
    }
});

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const tasksList = [];

    for (let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('Apagar', '').trim();
        tasksList.push(taskText);
    }
    const taskJSON = JSON.stringify(tasksList);
    localStorage.setItem('tasks', taskJSON);
}


function addSavedTasks() {
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);

    for(let task of taskList) {
        createTask(task);
    }

}

addSavedTasks();






