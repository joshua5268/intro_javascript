
function discoteca(){
    
    let edad = Number(prompt('Cual es tu edad?'));
    let nombre = '';

    if(edad >= 18){
        nombre = prompt('Cual es tu Nombre?');
        if(nombre == 'Mario' || nombre == 'Carlos'){
            alert('Bienvenido puede pasar a la disco joven ' + nombre + ' es cliente VIP :D');
        }
        else{{
            alert('Bienvenido puede pasar a la disco joven ' + nombre);
        }}
    }
    else{
        alert('No puede entrar a la disco');
    }
}

function ppt(){
    let jj1 = prompt('Selecciona tu movimiento jugador 1 (piedra/papel/tijera)');
    let jj2 = prompt('Selecciona tu movimiento jugador 2 (piedra/papel/tijera)');

    if(jj1 == 'piedra' && jj2 == 'papel'){
        alert('Felicidades Jugador 2, Ganaste!!');
    }
    else if(jj1 == 'papel' && jj2 == 'tijera'){
        alert('Felicidades Jugador 2, Ganaste!!');
    }
    else if(jj1 == 'tijera' && jj2 == 'piedra'){
        alert('Felicidades Jugador 2, Ganaste!!');
    }
    else if(jj1 == jj2){
        alert('Empate!!');
    }
    else{
        alert('Felicidades Jugador 1, Ganaste!!');
    }
}