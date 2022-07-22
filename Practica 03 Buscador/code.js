const inputBusqueda = document.querySelector("#inputBuscar");
const btnBusqueda = document.querySelector("#btnBuscar");
const boxSalas = document.querySelector("#boxSalas");
const linkIkea = document.querySelector("#linkIkea");
const linkMarcos = document.querySelector("#linkMarcos");
const linkCaressa = document.querySelector("#linkCaressa");
const linkLiddy = document.querySelector("#linkLiddy");
const linkAll = document.querySelector("#linkAll");

const datosBusqueda = {
    nombre: '',
    compania: ''
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarHTML(salas);
});


function mostrarHTML(salas){

    salas.forEach(sala => {
        const {nombre, compania, precio, imagen} = sala;
        const cardSala = document.createElement('div');
        cardSala.classList.add('col', 'mb-3');
        
        cardSala.innerHTML = `
        <div class="card">
            <div class="">
                <img src="${imagen}" class="img-fluid object-fit" alt="">
            </div>
            <div class="card-body text-center">
                <p class="card-title fs-6 fst-italic">${nombre}</p>
                <p class="fs-6 fw-bold">${precio}</p>
            </div>
        </div>
    `;

        boxSalas.appendChild(cardSala);
    });
}

btnBusqueda.addEventListener('click', () => {
    datosBusqueda.compania = '';
    datosBusqueda.nombre = inputBusqueda.value;
    filtrarSalas();
    inputBusqueda.value = '';
});

linkAll.addEventListener('click', () => {
    datosBusqueda.compania = '';
    datosBusqueda.nombre = '';
    filtrarSalas();
    inputBusqueda.value = '';
});

linkIkea.addEventListener('click', () => {
    datosBusqueda.nombre = '';
    datosBusqueda.compania = 'Ikea';
    filtrarSalas();
    inputBusqueda.value = '';
});

linkMarcos.addEventListener('click', () => {
    datosBusqueda.nombre = '';
    datosBusqueda.compania = 'Marcos';
    filtrarSalas();
    inputBusqueda.value = '';
});

linkCaressa.addEventListener('click', () => {
    datosBusqueda.nombre = '';
    datosBusqueda.compania = 'Caressa';
    filtrarSalas();
    inputBusqueda.value = '';
});

linkLiddy.addEventListener('click', () => {
    datosBusqueda.nombre = '';
    datosBusqueda.compania = 'Liddy';
    filtrarSalas();
    inputBusqueda.value = '';
});



function filtrarSalas(){
    let resultado = [];
    if(datosBusqueda.nombre){
        resultado = salas.filter(filtrarNombre);
    }else if (datosBusqueda.compania){    
        resultado = salas.filter(filtrarCompania);
    }else{
        resultado = salas;
    }
    
    limpiarHTML();

    if(resultado.length){
        mostrarHTML(resultado);
    }else{
        sinResultado();
    }
    
}

function filtrarNombre(sala){
    const {nombre} = datosBusqueda;
    return sala.nombre == nombre; 
}

function filtrarCompania(sala){
    const {compania} = datosBusqueda;
    return sala.compania == compania; 
}

function limpiarHTML(){
    while(boxSalas.firstChild){
        boxSalas.firstChild.remove();
    }
}

function sinResultado(){
    const cardSala = document.createElement('div');
    cardSala.classList.add('col', 'mb-3', 'text-center', 'bg-danger', 'text-white');
    
    cardSala.innerHTML = `No hay Resultado`;

    boxSalas.appendChild(cardSala);
}
  

