// PRIMA PARTE*************
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.

var studente = {
  "nome": "Anna",
  "cognome": "Rosalen",
  "età": 26
}

// console.log("oggetto", studente);

// Stampare a schermo attraverso il for in tutte le proprietà.
for (var key in studente){
  console.log(key + ":" + studente[key]);
}


// SECONDA PARTE*************
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

var studenti =
 [
   {
     "nome": "Marco",
     "cognome" : "Verdi",
     "età": 25
   },
   {
     "nome": "Filippo",
     "cognome" : "Rossi",
     "età": 20
   },
   {
     "nome": "Giorgia",
     "cognome" : "Bianco",
     "età": 25
   }
 ];

 for(var key in studenti){
   console.log(studenti[key].nome, studenti[key].cognome);
 }



// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
