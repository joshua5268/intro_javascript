const inputBusqueda = document.querySelector("#inputBuscar");
const btnBusqueda = document.querySelector("#btnBuscar");
const boxSalas = document.querySelector("#boxSalas");

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

btnBusqueda.addEventListener('click', (e) => {
    datosBusqueda.nombre = inputBusqueda.value;

    filtrarSalas();

    inputBusqueda.value = '';
});

function filtrarSalas(){
    const resultado = salas.filter(filtarNombre);

    limpiarHTML();

    if(resultado.length){
        mostrarHTML(resultado);
    }else{
        sinResultado();
    }
    
}

function filtarNombre(sala){
    const {nombre} = datosBusqueda;
    return sala.nombre == nombre; 
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
