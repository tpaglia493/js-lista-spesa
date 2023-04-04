//DEFINIZIONE DELL'ARRAY
let listaDellaSpesa = ["farina", "uova", "latte", "zucchero", "burro",];

//STAMPA A SCHERMO E CONSOLE DELL'ARRAY CON CICLO FOR
console.log("STAMPA A CONSOLE CON CICLO FOR")
for (let i = 0; i < listaDellaSpesa.length; i++) {
    console.log((i + 1) + ". " + listaDellaSpesa[i]);
    document.getElementById("lista-della-spesa-displayed").innerHTML += 
    `<li>${listaDellaSpesa[i]}  <button id="bottone-rimuovi-dalla-lista">Rimuovi dalla lista</button></li>`;
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

    //STAMPA A SCHERMO DELL'ULTIMO ELEMENTO (LUNGHEZZA meno 1) DELL'ARRAY
    document.getElementById("lista-della-spesa-displayed").innerHTML += 
    `<li>${listaDellaSpesa[(listaDellaSpesa.length - 1)]} <button id="bottone-rimuovi-dalla-lista">Rimuovi dalla lista</button></li>`;

};

//COLLEGAMENTO DEL BOTTONE ALLA FUNZIONE TRAMITE addEventListener("click", funzione)
document.getElementById("bottone-aggiungi-alla-lista").addEventListener("click", aggiungiAllaLista);

//DEFINIZIONE DELLA FUNZIONE PER RIMUOVERE IL VALORE DALLA LISTA SE IL BOTTONE VIENE CLICKATO

function rimuoviDallaLista(){
    listaDellaSpesa.splice(1,1);
    console.log(listaDellaSpesa);
};

document.getElementById("bottone-rimuovi-dalla-lista").addEventListener("click", rimuoviDallaLista);






