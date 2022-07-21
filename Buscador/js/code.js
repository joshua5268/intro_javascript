//01. Captura variables

const formBusqueda = document.querySelector('#form-busqueda');
const inputName = document.querySelector('#inputName');
const inputGenero = document.querySelector('#inputGenero');
const inputYear = document.querySelector('#inputYear');
const boxJuegos = document.querySelector('#box-juegos');

//05. generar objeto con la seleccion de busqueda del usuario

const datosBusqueda = {
    nombre: '',
    genero: '',
    año: ''
}

//02. Crear evento para mostrar informacion de la pagina

document.addEventListener('DOMContentLoaded', () => {
    mostrarHTML(juegos);
});

//03. Funcion que recorre el arreay de objetos y muestra el HTML

function mostrarHTML(juegos){
    limpiarHTML();

    juegos.forEach(juego => {
        const {nombre, genero, año, descripcion, imagen} = juego;

        const cardJuego = document.createElement('div');
        cardJuego.classList.add('col', 'mb-3');
        cardJuego.innerHTML = `
        <div class="card bg-secondary flex-row" style="height: 270px">
            <div class="w-50">
                <img src="${imagen}" alt="" class="img-fluid object-fit">
            </div>
            <div class="card-body w-50" style="overflow-y: auto";>
                <h2 class="card-title">${nombre}</h2>
                <p>Genero: ${genero}</p>
                <p>Año de Lanzamiento: ${año}</p>
                <p>Descripcion:</p>
                <p>${descripcion}</p>
            </div>
        </div>
        `;

        boxJuegos.appendChild(cardJuego);
    });
}

//04. Crear evento de envio de formulario

formBusqueda.addEventListener('submit', (e) => {
    e.preventDefault();

    datosBusqueda.nombre = inputName.value;
    datosBusqueda.genero = inputGenero.value;
    datosBusqueda.año = inputYear.value;


    filtrarJuegos();

    formBusqueda.reset();
});

//06. Crear una funcion para filtrar juegos

function filtrarJuegos(){
    const resultado = juegos.filter( filtrarName).filter(filtrarGenero).filter(filtrarYear);
 
    if(resultado.length){
        mostrarHTML(resultado);
    }else{
        sinResultado();
    }
    
}

//07. Generar funciones que se enviaran al filter

function filtrarName(juego){
    const {nombre} = datosBusqueda;

    if(nombre){
        return juego.nombre == nombre; 
    }

    return juegos;
}

function filtrarGenero(juego){
    const {genero} = datosBusqueda;
    
    if(genero){
        return juego.genero == genero; 
    }

    return juegos;
}

function filtrarYear(juego){
    const {año} = datosBusqueda;
    
    if(año){
        return juego.año == año; 
    }

    return juegos;
}

//08. Generar funcion limpiar y agregar a mostrar HTML

function limpiarHTML(){
    while(boxJuegos.firstChild){
        boxJuegos.firstChild.remove();
    }
}

//Funcion que muestra mensaje de sin resultado

function sinResultado(){

    limpiarHTML();

    const sinResultado = document.createElement('div');
    sinResultado.classList.add('bg-danger', 'text-white', 'border-danger', 'p-4', 'text-center');
    sinResultado.textContent = 'No hay resultados';

    boxJuegos.parentElement.appendChild(sinResultado);
}