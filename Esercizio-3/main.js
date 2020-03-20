// OGGETTO ESERCIZIO
 // Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.


// variabili
var firstNumber;
var secondNumber;
var thirdNumber;
var fourthNumber;
var fifthNumber;
var msg;


// chiedere a utente un numero
firstNumber = parseInt(prompt("Scrivi un primo numero!"));
// chiedere a utente un secondo numero
secondNumber = parseInt(prompt("Scrivi un secondo numero!"));
// chiedere a utente un terzo numero
thirdNumber = parseInt(prompt("Scrivi un terzo numero!"));
// chiedere a utente un quarto numero
fourthNumber = parseInt(prompt("Scrivi un quarto numero!"));
// chiedere a utente un quinto numero
fifthNumber = parseInt(prompt("Scrivi un quinto numero!"));
// assegnazione msg
msg = firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber;
// stampa la somma dei cinque numeri
document.getElementById('sum').innerHTML = msg;
