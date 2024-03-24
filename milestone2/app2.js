/*Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
Aggiungere il nuovo studente all’array di studenti
Ciclare su tutti gli studenti e stampare per ognuno di essi tutte le proprietà nome, cognome, eta*/

let studenti = [
    {
        nome: prompt('Inserisci il nome'),
        cognome: prompt('Inserisci il cognome'),
        età: prompt('Inserire età'),
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
];

// for(let i = 0; i<studenti.length; i++){
//     const studente = studenti[i];
//     const nome = studente.nome;
//     const cognome = studente.cognome;
//     const età = studente.età;
//     console.log(nome + ' '+ cognome + ' ' + età +'.');
// };


studenti.forEach(function (studenti) {
    let studente= studenti
    const nome = studente.nome;
    const cognome = studente.cognome;
    const età = studente.età;
    console.log(nome + ' '+ cognome + ' ' + età +'.');
});