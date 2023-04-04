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

//DEFINIZIONE ARRAY
let listaDellaSpesa = ["farina", "uova", "latte", "zucchero", "burro",];

//STAMPA A SCHERMO E CONSOLE CON CICLO FOR
console.log("STAMPA A CONSOLE CON CICLO FOR")
for (let i = 0; i < listaDellaSpesa.length; i++) {
    console.log((i + 1) + ". " + listaDellaSpesa[i]);
    document.getElementById("lista-della-spesa-displayed").innerHTML+=`<li>${listaDellaSpesa[i]} </li>`;
};

//STAMPA A CONSOLE CON CICLO WHILE
console.log("STAMPA A CONSOLE CON CICLO WHILE")
let contatore = 0;
while (contatore < listaDellaSpesa.length) {
    console.log((contatore + 1) + ". " + listaDellaSpesa[contatore]);
    contatore++;
};

