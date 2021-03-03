// array con i cognomi già inseriti
var cognomiInseriti = ["cantelli", "bianchi", "trabucco", "fiorentini", "barone"];

// chiedo il cognome all'utente
var cognome = prompt("Inserisci il tuo cognome:");
cognomiInseriti.push(cognome);

// ordino i cognomi in ordine alfabetico
cognomiInseriti.sort();

/* avvio il ciclo per stampare la lista cognomi e identifico la
posizione del cognome appena inserito
*/
var i = 0;

while (i < cognomiInseriti.length) {
 if (cognome != cognomiInseriti[i]) {
    document.getElementById('stampa').innerHTML += "<li>" + cognomiInseriti[i] + "</li>";
 }
 else {
   document.getElementById('stampa').innerHTML += "<li>" + cognome + " è il numero: " + (i + 1) + "</li>";
 }
 i++;
}
