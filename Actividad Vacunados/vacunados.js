//mayor de 18 años que residen en municipio fronterizo del norte del pais
//Embarazadas con mas de 9 semanas de gestacion
//personas que cumplen 30 años o mas en este año

function validar(){
    let edad = prompt('Cual es tu edad?');
    let sexo = prompt('Cual es tu sexo? (m/h)');
    let mesNac = prompt('Cual es tu mes de nacimiento? (1-12)');
    let municipio = prompt('Eres de un munipio fronterizo del Norte del pais?');
    let embarazada;
    let semanas;

    if(sexo == 'm'){
        embarazada = prompt('Estas embarazada?');
        if(embarazada == 'si'){
            semanas = prompt('Cuantas semanas tienes de embarazo?');
        }
    }

    if(edad > 18){
        if(sexo == 'h'){
            if(edad > 29 || (edad == 29 && mesNac >= 7) ){
                console.log('Puedes vacunarte, perteneces al grupo de 30 años o mas')
                document.getElementById('respuesta').innerHTML = 'Puedes vacunarte, perteneces al grupo de 30 años o mas';
            }
            else{
                if(municipio == 'si'){
                    console.log('Puedes vacunarte, perteneces al grupo que reside en municipio fronterizo del Norte del pais')
                    document.getElementById('respuesta').innerHTML = 'Puedes vacunarte, perteneces al grupo que reside en municipio fronterizo del Norte del pais';
                }
                else{
                    console.log('No puedes Vacunarte ya que no no eres mayo de 30 años ni perteneces a un municipio fronterizo del norte del pais')
                    document.getElementById('respuesta').innerHTML = 'No puedes Vacunarte ya que no no eres mayo de 30 años ni perteneces a un municipio fronterizo del norte del pais';
                }
            }
        }
        else{
            if(embarazada == 'si'){
                if(semanas > 9){
                    console.log('Puedes vacunarte, perteneces al grupo de embarazadas con mas de 9 semanas de gestacion')
                    document.getElementById('respuesta').innerHTML = 'Puedes vacunarte, perteneces al grupo de embarazadas con mas de 9 semanas de gestacion';
                }
                else{
                    console.log('No puedes vacunarte, debido al tiempo de gestacion de tu embarazo')
                    document.getElementById('respuesta').innerHTML = 'No puedes vacunarte, debido al tiempo de gestacion de tu embarazo';
                }
            }
            else{
                if(edad > 29 || (edad == 29 && mesNac >= 7) ){
                    console.log('Puedes vacunarte, perteneces al grupo de 30 años o mas')
                    document.getElementById('respuesta').innerHTML = 'Puedes vacunarte, perteneces al grupo de 30 años o mas';
                }
                else{
                    if(municipio == 'si'){
                        console.log('Puedes vacunarte, perteneces al grupo que reside en municipio fronterizo del Norte del pais')
                        document.getElementById('respuesta').innerHTML = 'Puedes vacunarte, perteneces al grupo que reside en municipio fronterizo del Norte del pais';
                    }
                    else{
                        console.log('No puedes Vacunarte ya que no no eres mayo de 30 años ni perteneces a un municipio fronterizo del norte del pais')
                        document.getElementById('respuesta').innerHTML = 'No puedes Vacunarte ya que no no eres mayo de 30 años ni perteneces a un municipio fronterizo del norte del pais';
                    }
                }
            }
        }
    }
    else{
        console.log('No puedes vacunarte ya que eres menor de 18 años')
        document.getElementById('respuesta').innerHTML = 'No puedes vacunarte ya que eres menor de 18 años';
    }
}