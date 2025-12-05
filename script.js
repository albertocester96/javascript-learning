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
*/