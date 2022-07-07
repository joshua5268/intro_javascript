
function divisorwhile(){
    let num = Number(prompt('Introduce un numero'));
    let cont = 1;
    let imprime = '';

    while(cont <= num){
        if(cont % 5 == 0){
            imprime += String(cont) + "\n";
        }
        cont ++;
    }

    document.getElementById('respuesta').innerHTML = imprime;
}


function divisordo(){
    let num = Number(prompt('Introduce un numero'));
    let cont = 1;
    let imprime = '';

    do{
        if(cont % 5 == 0){
            imprime += String(cont) + "\n";
        }
        cont ++;
    }while(cont <= num);
    document.getElementById('respuesta').innerHTML = imprime;
}


function impares(){
    let imprime = '';

    for(let i = 1; i <= 150; i++){
        if(i % 2 != 0){
            imprime += String(i) + " ";
        }
    }
    document.getElementById('respuesta').innerHTML = imprime;
}

function rango(){
    let inicio = Number(prompt('Inicio del rango...'));
    let fin = Number(prompt('Fin del rango...'));
    let imprime = '';

    for(let i = 1; i <= 100; i++){
        if(i >= inicio && i <= fin){
            continue;
        }
        imprime += String(i) + " ";
    }
    document.getElementById('respuesta').innerHTML = imprime;
}