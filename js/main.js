//Data una lista della spesa, stampare in console gli elementi della lista individualmente, 
//prima con un ciclo for, poi con un ciclo while.
//Quando le stampe in console sono corrette, stampare gli elementi in un elenco puntato,
//utilizzando uno dei due cicli scritti al punto precedente.

//Bonus:
//Aggiungere alla pagina HTML un campo di input testuale e un pulsante “aggiungi”: 
//l’utente inserisce nell’input un prodotto da acquistare e quando clicca sul pulsante, 
//il testo viene aggiunto alla lista.

//Super Bonus:
//Aggiungere a fianco ad ogni elemento della lista un pulsante “elimina”: 
//quando l’utente clicca su uno di questi pulsanti, 
//l’elemento corrispondente viene rimosso dalla lista.
`backticks`

//DEFINIZIONE DELL'ARRAY
let listaDellaSpesa = ["farina", "uova", "latte", "zucchero", "burro",];

//STAMPA A SCHERMO E CONSOLE CON CICLO FOR
console.log("STAMPA A CONSOLE CON CICLO FOR")
for (let i = 0; i < listaDellaSpesa.length; i++) {
    console.log((i + 1) + ". " + listaDellaSpesa[i]);
    document.getElementById("lista-della-spesa-displayed").innerHTML += `<li>${listaDellaSpesa[i]} </li>`;
};

//STAMPA A SCHERMO E CONSOLE CON CICLO WHILE
/*
console.log("STAMPA A CONSOLE CON CICLO WHILE")
let contatore = 0;
while (contatore < listaDellaSpesa.length) {
    console.log((contatore + 1) + ". " + listaDellaSpesa[contatore]);
    document.getElementById("lista-della-spesa-displayed").innerHTML += `<li>${listaDellaSpesa[contatore]} </li>`;
    contatore++;
};
*/

//AGGIUNTA DEL VALORE DELL'INPUT UTENTE NELL'ARRAY listaDellaSpesa

    //DEFINIZIONE DELLA FUNZIONE PER AGGIUNGERE IL VALORE ALLA LISTA SE IL BOTTONE VIENE CLICKATO
function aggiungiAllaLista() {

    //ESTRAZIONE VALORE DALL'INPUT UTENTE E SALVATAGGIO IN UNA VARIABILE
    let inputDaAggiungereAllaLista = document.getElementById("elemento-da-aggiungere").value;

    //controllo se ha salvato il valore nella variabile
    console.log(inputDaAggiungereAllaLista)

    //AGGIUNTA DEL VALORE DELL'INPUT UTENTE NELL'ARRAY listaDellaSpesa
    listaDellaSpesa.push(inputDaAggiungereAllaLista);

    //controllo che l'array abbia il nuovo elemento
    console.log(listaDellaSpesa);

    //STAMPA A SCHERMO DELL'ELEMENTO (LUNGHEZZA meno 1) DELL'ARRAY
    document.getElementById("lista-della-spesa-displayed").innerHTML += `<li>${listaDellaSpesa[(listaDellaSpesa.length - 1)]} </li>`;

};

//COLLEGAMENTO DEL BOTTONE ALLA FUNZIONE TRAMITE addEventListener("click", funzione)
document.getElementById("bottone-aggiungi-alla-lista").addEventListener("click", aggiungiAllaLista);




