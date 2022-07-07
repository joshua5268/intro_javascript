function divisorrecursivo(num){
    let cadena = '';
    if(num % 5 == 0){
        cadena += num + ', ';
    }
    if(num >0){
        cadena += divisorrecursivo(num-1);
    }
    return cadena;
}

function imparesrecursivo(num){
    let cadena = '';
    if(num % 2 == 0){
        cadena += num + ', ';
    }
    if(num >0){
        cadena += imparesrecursivo(num-1);
    }
    return cadena;
}

function rangorecursivo(ini, fin, cont){
    let cadena = '';
    if(cont < ini || cont > fin){
        cadena += cont + ', ';
    }
    if(cont >0){
        cadena += rangorecursivo(ini, fin, cont-1);
    }
    return cadena;
}