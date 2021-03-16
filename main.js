$(document).ready(function () {

//Crea oggetto studente con proprietà nome cognome età

    var studente = {
        nome : "Walter",
        cognome : "Velardo",
        eta : 25
    };

//Stampare con ciclo for tutte le proprietà dell'oggetto

    for (var key in studente) {
        console.log(studente[key]);
         /* $("#studente").append(studente[key]); */ 
    }

//Creare array di oggetti studenti
//Ciclare ogni oggetto studento stampando proprietà nome congome
//Chiedere all'utente tramite tramite form di aggiungre un nuovo oggetto studente 
//inserendo nome cogmone età
});