
document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var prioritySelect = document.getElementById("prioritySelect");
    var tableBody = document.querySelector("#tabelaTarefas table tbody");

    if (taskInput.value.trim() !== '') {
        var newRow = tableBody.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.innerHTML = taskInput.value;
        cell2.innerHTML = prioritySelect.value;
        cell3.innerHTML = '<button onclick="markAsDone(this)">Concluída</button>' +
                          '<button onclick="removeTask(this)">Remover</button>';

        // Adicionar a tarefa ao localStorage
        var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ name: taskInput.value, priority: prioritySelect.value });
        localStorage.setItem('tasks', JSON.stringify(tasks));

        taskInput.value = '';
    } else {
        alert("Por favor, digite uma tarefa válida.");
    }
}

function removeTask(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);

    // Atualizar o localStorage após remover a tarefa
    updateLocalStorage();
}

function markAsDone(button) {
    var row = button.parentNode.parentNode;
    row.style.textDecoration = "line-through";
}

function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    var tableBody = document.querySelector("#tabelaTarefas table tbody");

    tasks.forEach(function(task) {
        var newRow = tableBody.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.innerHTML = task.name;
        cell2.innerHTML = task.priority;
        cell3.innerHTML = '<button onclick="markAsDone(this)">Concluída</button>' +
                          '<button onclick="removeTask(this)">Remover</button>';
    });
}

function updateLocalStorage() {
    var tasks = [];
    var tableRows = document.querySelectorAll("#tabelaTarefas table tbody tr");

    tableRows.forEach(function(row) {
        var taskName = row.cells[0].innerText;
        var priority = row.cells[1].innerText;
        tasks.push({ name: taskName, priority: priority });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}
