/* Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while */


//Data una lista della spesa,
const listSpesa = [];
let contenitoreListaSpesa = document.getElementById('elementi_lista');
let i = true;
const ListaSpesaUl = document.createElement('ul');
contenitoreListaSpesa.insertAdjacentElement('beforeend',ListaSpesaUl);
while (i == true) {
    let elementoLista = prompt('cosa vuoi aggiungere alla lista della spesa ?');
    listSpesa.push(elementoLista);
    //stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
    const listSpesail = document.createElement('li');
    ListaSpesaUl.insertAdjacentElement('beforeend',listSpesail);
    listSpesail.innerHTML = elementoLista;
    i = confirm('vuoi aggiungere altro ?');
    console.log(elementoLista);
}
