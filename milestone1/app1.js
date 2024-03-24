/*Creare un array di oggetti di studenti.
Ogni oggetto studente deve avere tre proprietà: nome, cognome, eta
Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.*/

//creo un array di oggetti
let studenti = [
    {
        nome: "Augusto",
        cognome: "Claudii",
        età: 26,
    },
    {
        nome: "Tiberio",
        cognome: "Claudii",
        età: 24,
    },
    {
        nome: "Caligola",
        cognome: "Claudii",
        età: 20,
    },
    {
        nome: "Claudio",
        cognome: "Claudii",
        età: 18,
    },
    {
        nome: "Nerone",
        cognome: "Claudii",
        età: 16,
    },
];
// creo ciclo for
// for(let i = 0; i<studenti.length; i++){
//     const studente = studenti[i];
//     const nome = studente.nome;
//     const cognome = studente.cognome;
//     console.log(nome + ' '+ cognome + '.');
//     // console.log(studente)
// }

//esercizio utilizzando il ciclo forEach
studenti.forEach(function (studenti) {
    let studente= studenti
    const nome = studente.nome;
    const cognome = studente.cognome;
    console.log(nome + ' '+ cognome + '.');
});