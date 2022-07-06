function validar(){
    let edad = Number(prompt('Cual es tu edad?'));
    let sexo = prompt('Cual es tu sexo? (M/F)');
    let mesNac = Number(prompt('Cual es tu mes de nacimiento? (1-12)'));
    let municipio = prompt('Eres de un munipio fronterizo del Norte del pais?');
    let embarazada;
    let semanas;

    if(sexo == 'F'){
        embarazada = prompt('Estas embarazada?');
        if(embarazada == 'si'){
            semanas = prompt('Cuantas semanas tienes de embarazo?');
        }
    }
    
    if((edad > 29 || (edad == 29 && mesNac >= 7)) || (edad > 18 && municipio == 'si') || (edad > 18 && embarazada == 'si' && semanas > 9)){
        document.getElementById('respuesta').innerHTML = 'Puedes vacunarte';
    }
    else{
        document.getElementById('respuesta').innerHTML = 'No puedes vacunarte';
    }
}