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

    var studenti = [

       {
            nome : "Walter ",
            cognome : "Velardo",
            eta : 25,
        },
        {
            nome : "Aldo ",
            cognome : "Baglio",
            eta : 62,
        },
        {
            nome : "Giovanni ",
            cognome : "Storti",
            eta : 64,
        },
        {
            nome : "Giacomo ",
            cognome : "Poretti",
            eta : 64,
        }

    ];
    
    

//Ciclare ogni oggetto studente stampando proprietà nome cognome

    console.log("NOME E COGNOME STUDENTI:");  
    for (var i = 0; i < studenti.length; i++) {

        console.log(studenti[i].nome + "" + studenti[i].cognome);
        
    } 

    

//Chiedere all'utente tramite tramite form di aggiungre un nuovo oggetto studente 
//inserendo nome cogmone età

    $("#invia").click(function () { 

        var nome = $("#name").val();
        var cognome = $("#surname").val();
        var eta = parseInt($("#eta").val());
        
        var studente = {
            nome : nome,
            cognome : cognome,
            eta : eta,
        }
        studenti.push(studente);

        for (var i = 0; i < studenti.length; i++) {

            console.log(studenti[i]);
            
        }
    });





    


});