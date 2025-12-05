/*
// esercizio 1:  modificare il colore di sfondo di un bottone al passaggio del mouse e cambiare il testo di un paragrafo al click del bottone
const btn = document.querySelector('.btn');
const textToChange = document.querySelector('#testo');

btn.addEventListener('mouseover', function(){
    
    if(btn.style.backgroundColor === 'lightblue'){
    btn.style.backgroundColor = 'blue';
}
    else{
        btn.style.backgroundColor = 'lightblue';
    }}
)

btn.addEventListener('click', () =>  textToChange.textContent = 'You clicked the button!');


//esercizio 2: Crea una variabile password.Se la password ha più di 8 caratteri → stampa “Password ok”Altrimenti → “Password troppo corta”.

let pass = document.querySelector('#userPass');
const checkPass = document.querySelector('#checkPassword');

pass.addEventListener('input', function(){
    if(pass.value.length > 8){
        checkPass.textContent = 'Password ok';
    }
    else if(pass.value.length <= 8){
        checkPass.textContent = 'Password troppo corta';
    }
});


//esercizio 3: converti il testo inserito in un input da una stringa a un numero intero

const numberInput = document.querySelector('.js-textInput');

numberInput.addEventListener('input', () =>{
    const ParsedNumber= Number(numberInput.value);
    console.log(ParsedNumber);
});


//esercizio 4: creare un input di testo e trasformare lo stesso in minuscolo o maiuscolo a seconda dell'attivazione o meno di due pulsanti

let userInput = document.querySelector('#testo4');
const btnMaiuscole = document.querySelector('#maiuscole');
const btnMinuscole = document.querySelector('#minuscole');

btnMaiuscole.addEventListener("click" ,() => {

    if(typeof userInput.value === "string"){
        userInput.value = userInput.value.toUpperCase();
    }
    
})

btnMinuscole.addEventListener("click" ,() => {

    if(typeof userInput.value === "string"){
        userInput.value = userInput.value.toLowerCase();
    }
    
})



//esercizio 1.2


const btn20 = document.querySelector('.js-20');
const btn10 = document.querySelector('.js-10');
const btnCalcola = document.querySelector('.js-calcola');
const prezzoFinito = document.querySelector('.js-prezzoFinito');
const inputPrice = document.querySelector('#price');
let selectediva = 0;

function CalcolaPrezzo (iva) {

    if ( iva === 10 || iva === 20 ){
        prezzo = inputPrice.value * (1 + (iva/100));
        prezzoFinito.textContent = prezzo.toFixed(2);
    }
       
    else {
        prezzoFinito.textContent = "Non è stato impostata l'iva da appplicare"
    }
}

function IvaColor (iva, buttonClicked) {

    selectediva = iva;

    btn20.classList.remove('selected');
    btn10.classList.remove('selected');

    buttonClicked.classList.add('selected');

}

btn20.addEventListener('click', () => {
    IvaColor(20, btn20);
})


btn10.addEventListener('click', () => {
    IvaColor(10, btn10);
})


btnCalcola.addEventListener('click', () => {
        CalcolaPrezzo(selectediva)
    }
);


//esercizio 1.3

const area = document.querySelector('.js-descrizioneProdotto');


area.addEventListener("input", () => {

    const descriptionLenght= area.value.length;

     area.classList.remove('max180', 'max200');

    if(descriptionLenght >= 180 && descriptionLenght < 200){
        area.classList.remove('max200');
        area.classList.add('max180');
    }
    else if(descriptionLenght >=200){
        area.classList.remove('max180');
        area.classList.add('max200');
    }

}
)

*/

