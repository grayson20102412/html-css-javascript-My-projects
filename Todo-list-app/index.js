function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Bitte eine Aufgabe eingeben!"); 
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">✖</button>`;
    
    taskList.appendChild(li);
    taskInput.value = "";
}


function removeTask(button) {
    button.parentElement.remove();
}
