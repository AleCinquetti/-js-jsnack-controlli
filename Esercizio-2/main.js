// OGGETTO ESERCIZIO
 // L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// variabili
var firstWord;
var secondWord;
var msg;

 // utente inserisce una parola
firstWord = prompt("Scrivi una parola!")
 // utente inserisce una seconda parola
secondWord = prompt("Scrivi una seconda parola!")
 // condizioni per la stampa
if (firstWord.length > secondWord.length) {
    msg = firstWord + " " + secondWord;
} else if (firstWord.length < secondWord.length) {
    msg = secondWord + " " + firstWord;
} else {
    msg = firstWord + " " + secondWord;
}
 // stampa
 document.getElementById('word').innerHTML = msg;
