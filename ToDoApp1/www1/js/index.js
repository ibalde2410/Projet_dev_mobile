//document.addEventListener('DOMContentLoaded', (event) => {
//    const taskInput = document.getElementById('new-task');
//    const addTaskBtn = document.getElementById('add-task-btn');
//    const taskList = document.getElementById('task-list');
//
//    addTaskBtn.addEventListener('click', () => {
//        const taskText = taskInput.value.trim();
//        if (taskText) {
//            addTask(taskText);
//            taskInput.value = '';
//        }
//    });
//
//    function addTask(taskText) {
//        const taskItem = document.createElement('li');
//        taskItem.className = 'task-item';
//
//        const taskContent = document.createElement('span');
//        taskContent.textContent = taskText;
//
//        const deleteBtn = document.createElement('button');
//        deleteBtn.textContent = 'Supprimer';
//        deleteBtn.addEventListener('click', () => {
//            taskList.removeChild(taskItem);
//        });
//
//        taskItem.appendChild(taskContent);
//        taskItem.appendChild(deleteBtn);
//        taskList.appendChild(taskItem);
//    }
//});

$(document).on('pagecreate', '#home', function() {
    const taskInput = $('#new-task');
    const addTaskBtn = $('#add-task-btn');
    const taskList = $('#task-list');

    addTaskBtn.on('click', function() {
        const taskText = taskInput.val().trim();
        if (taskText) {
            addTask(taskText);
            taskInput.val('');
        }
    });

    function addTask(taskText) {
        const taskItem = $('<li>').addClass('task-item');

        const taskContent = $('<span>').text(taskText);

        const deleteBtn = $('<button>').text('Supprimer').on('click', function() {
            taskItem.remove();
            taskList.listview('refresh');
        });

        taskItem.append(taskContent).append(deleteBtn);
        taskList.append(taskItem);
        taskList.listview('refresh');
    }
});
