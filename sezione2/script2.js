
class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.status = "incomplete";
        this.createdAt = Date.now();
        this.idTask = Task.idTask++;
    }

    static idTask = 0; //la proprietà statica viene condivisa tra tutte le istanze della classe, appartiene a questa e non agli oggetti creati
}

const addTaskButton = document.querySelector("#addTaskButton");
const taskTitle = document.querySelector(".js-title");
const taskDescription = document.querySelector(".js-description");

const taskListContainer = document.querySelector(".js-taskList");


let tasks = []; 

//funzione per visualizzare le attività salvate nel local storage
function displayTasks() {

    taskListContainer.innerHTML = "";

    for (let i=0; i<localStorage.length; i++){
        const task = JSON.parse(localStorage.getItem(localStorage.key(i)));

        console.log(task);

        tasks.forEach(task => {
            const taskElement = document.createElement("div");
            taskElement.innerHTML = `<h3>${task.title}</h3>
                                     <p>${task.description}</p>
                                     <p>Status: ${task.status}</p>
                                     <hr>`;
            taskListContainer.appendChild(taskElement);
        });
       
    }
}

//evento di click per aggiungere una nuova attività in local storage
addTaskButton.addEventListener("click", function() {
    newTask = new Task(taskTitle.value, taskDescription.value);
    tasks.push(newTask);
    localStorage.setItem("task", JSON.stringify(tasks));

    displayTasks();
});



