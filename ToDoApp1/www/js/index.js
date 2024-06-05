function ajouterTask() {
    const task = document.getElementById('task');
    const taskList = document.getElementById('taskList');
    if (task.value) {
        let newItem = document.createElement('li');
        newItem.innerHTML = task.value;
        taskList.appendChild(newItem);

        $(newItem).on('swiperight', function(e) {
            moveToCompleted(this);
        });

        $(newItem).on('swipeleft', function(e) {
            $(this).hide('slow', function() {
                $(this).remove();
            });
        });

        $(taskList).listview('refresh');
    }
    task.value = '';
    task.focus();
}

function reinitialiserList() {
    const task = document.getElementById('task');
    const taskList = document.getElementById('taskList');
    const completedTaskList = document.getElementById('completedTaskList');
    task.value = '';
    taskList.innerHTML = '';
    completedTaskList.innerHTML = '';
    task.focus();
}

function moveToCompleted(taskItem) {
    const completedTaskList = document.getElementById('completedTaskList');
    const newItem = document.createElement('li');
    newItem.innerHTML = taskItem.innerHTML;

    $(newItem).on('swipeleft', function(e) {
        $(this).hide('slow', function() {
            $(this).remove();
        });
    });

    $(newItem).on('swiperight', function(e) {
        moveToTasks(this);
    });

    completedTaskList.appendChild(newItem);
    $(completedTaskList).listview('refresh');
    $(taskItem).remove();
}

function moveToTasks(taskItem) {
    const taskList = document.getElementById('taskList');
    const newItem = document.createElement('li');
    newItem.innerHTML = taskItem.innerHTML;

    $(newItem).on('swiperight', function(e) {
        moveToCompleted(this);
    });

    $(newItem).on('swipeleft', function(e) {
        $(this).hide('slow', function() {
            $(this).remove();
        });
    });

    taskList.appendChild(newItem);
    $(taskList).listview('refresh');
    $(taskItem).remove();
}

$(document).on("pagecreate", function() {
    $(document).on("swiperight", "#taskList li", function(event) {
        moveToCompleted(this);
    });

    $(document).on("swiperight", "#completedTaskList li", function(event) {
        moveToTasks(this);
    });

    $(document).on("swipeleft", "#taskList li, #completedTaskList li", function(event) {
        $(this).hide('slow', function() {
            $(this).remove();
        });
    });
});
