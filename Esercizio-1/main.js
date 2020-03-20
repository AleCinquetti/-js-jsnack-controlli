// OGGETTO ESERCIZIO
// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

// variabili
var firstNumber;
var secondNumber;
var msg;


// scrivi un numero
firstNumber = parseInt(prompt("Scrivi un numero!"))
// scrivi un secondo numero
secondNumber = parseInt(prompt("Scrivi un secondo numero!"))
// condizioni per la stampa
if (firstNumber > secondNumber) {
    msg = firstNumber;
} else if (firstNumber < secondNumber) {
    msg = secondNumber;
} else {
    msg = firstNumber = secondNumber;
}
// stampa
document.getElementById('number').innerHTML = msg;
