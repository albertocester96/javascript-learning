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
    constructor(name, decription, category, image, color, size, price){
        this.name = name;
        this.description = decription;
        this.category = category;
        this.image = image;
        this.color = color;
        this.size = size;
        this.price = price;
    }
}

const categorie = {
    tutteLeCategorie: "Tutte le categorie",
    tshirt: "T-shirt",
    jeans: "Jeans",
    sneakers: "Sneakers",
    giacca: "Giacca",
    cappello: "Cappello"
};
    

const taglia = {
    tutteLeTaglie: "Tutte le taglie",
    small: "S",
    medium: "M",
    large: "L",
    extraLarge: "XL",
    oneSize: "One Size"
};

const colore = {
    blue: "blue",
    black: "black",
    white: "white",
    green: "green",
    red: "red"
};

const prezzoRange = {
    low: 19.99,
    medium: 49.99,
    high: 129.99
};


const categoryFilter = document.querySelector(".js-category-filter");
const sizeFilter = document.querySelector(".js-size-filter");
const colorFilter = document.querySelector(".js-color-filter");
const priceFilter = document.querySelector(".js-price-filter");
const filterButton = document.querySelector(".js-filter-button");

let productArray = [];
let filteredProducts = [];
const filtri = [{categorie: categoryFilter},
                {taglia: sizeFilter},
                {colore: colorFilter}, 
                {prezzoRange: priceFilter}];

const productList = document.querySelector(".js-product-list");

productArray.push(new Product("Tshirt", "T-shirt in cotone", categorie.tshirt, "assets/blue_tshirt.jpeg", colore.blue, taglia.medium, prezzoRange.low));
productArray.push(new Product("Jeans", "Jeans slim fit", categorie.jeans, "assets/jeans.jpeg", colore.black, taglia.large, prezzoRange.medium));
productArray.push(new Product("Sneakers", "Sneakers da corsa", categorie.sneakers, "assets/sneakers.jpeg", colore.white, taglia.large, prezzoRange.high));
productArray.push(new Product("Giacca", "Giacca invernale", categorie.giacca, "assets/giacca.jpeg", colore.green, taglia.extraLarge, prezzoRange.high));
productArray.push(new Product("Cappello", "Cappello di lana", categorie.cappello, "assets/cappello.jpeg", colore.black, taglia.oneSize, prezzoRange.low));
productArray.push(new Product("Cappello rosso", "Cappello di lana rosso", categorie.cappello, "assets/cappello_rosso.jpeg", colore.red, taglia.oneSize, prezzoRange.low));


function DisplayProducts(products){


    //svota lista
    productList.innerHTML = "";
    products.forEach(product => {
        const div = document.createElement("div");
            div.innerHTML  = `<div class="product-item">
                            <h3>${product.name}</h3>
                            <p>${product.description}</p>
                            <img src="${product.image}" alt="${product.name}" style="width:100px; height:auto;">
                            <div class="product-info">
                            <p>Color: ${product.color}</p>
                            <p>Size: ${product.size}</p>
                            <p>Price: $${product.price}</p>
                            <hr>
                            </div>
                            </div>`;
        productList.appendChild(div);
    })
    

};


categoryFilter.addEventListener("change", (cat) => {
    selectedCategory = cat.target.value; 

    if(selectedCategory === "tutteLeCategorie") {
        DisplayProducts(productArray);
    }

    else {
        filteredProducts = productArray.filter( product => product.category === categorie[selectedCategory] )

        DisplayProducts(filteredProducts);

    }
    
})

filtri.forEach( (filtro.key, filtro.value) => {
    Object.entries(filtro).forEach(([key, value]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = value;
    filtroElement.appendChild(option);
});
})


sizeFilter.addEventListener("change", (size) => {
    selectedSize = size.target.value; 

    if(selectedSize === "tutteLeTaglie") {
        DisplayProducts(productArray);
    }

    else {
        filteredProducts = productArray.filter( product => product.size === taglia[selectedSize] )

        DisplayProducts(filteredProducts);

    }
    
})

DisplayProducts(productArray);

