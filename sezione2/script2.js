//Esercizio 2.1
/*
class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.status = "incomplete";
        this.createdAt = Date.now();
        this.idTask = Task.idTask++;
        this.removed = false;
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

        const task = JSON.parse(localStorage.getItem(localStorage.key('task')));
        tasks = task || [];

        console.log(task);

        tasks.forEach(task => {
            const taskElement = document.createElement("div");
            taskElement.innerHTML = `<h3>${task.title}</h3>
                                            <p>${task.description}</p>
                                            <p>Status: ${task.status}</p>
                                            <button data-id="${task.idTask}" class= "js-remove-btn" style= "background-color: red;"> Rimuovi </button>
                                            <hr>`;
            taskListContainer.appendChild(taskElement);
        });
       
}

//evento di click per aggiungere una nuova attività in local storage
addTaskButton.addEventListener("click", function() {
    newTask = new Task(taskTitle.value, taskDescription.value);
    tasks.push(newTask);
    localStorage.setItem("task", JSON.stringify(tasks));

    displayTasks();
});

taskListContainer.addEventListener("click", function(e) {
    const taskToRemove = Number(e.target.dataset.id);
    console.log(taskToRemove);
    tasks = tasks.filter(task => task.idTask !== taskToRemove) //crea un nuvovo array senza l'elemento con idTask uguale a taskToRemove
    console.log(tasks.length);
    localStorage.setItem("task", JSON.stringify(tasks));
    console.log(localStorage.getItem("task"));
    displayTasks();
});

displayTasks();
*/

//Esercizio 2.2 - filtri per collezione di oggetti

class Product{
    constructor(name, decription, image, color, size, price){
        this.name = name;
        this.description = decription;
        this.image = image;
        this.color = color;
        this.size = size;
        this.price = price;
    }
}

const productList = [];

productList.push(new Product("T-shirt", "T-shirt in cotone", "assets/t-shirt_blue.html", "blue", "M", 19.99));
productList.push(new Product("Jeans", "Jeans slim fit", "img/jeans.jpg", "black", "L", 49.99));
productList.push(new Product("Sneakers", "Sneakers da corsa", "img/sneakers.jpg", "white", "42", 89.99));
productList.push(new Product("Giacca", "Giacca invernale", "img/giacca.jpg", "green", "XL", 129.99));
productList.push(new Product("Cappello", "Cappello di lana", "img/cappello.jpg", "red", "One Size", 14.99));

function DisplayProducts(products){
    const productContainer = document.querySelector(".js-product-container");

    products.forEach(product => {
        const div = document.createElement("div");
            div.innerHTML  = `<h3>${product.name}</h3>
                              <p>${product.description}</p>
                              <img src="${product.image}" alt="${product.name}" style="width:100px; height:auto;">
                                <p>Color: ${product.color}</p>
                                <p>Size: ${product.size}</p>
                                <p>Price: $${product.price}</p>
                                <hr>`;

    productContainer.appendChild(div);
})
};;

DisplayProducts(productList);