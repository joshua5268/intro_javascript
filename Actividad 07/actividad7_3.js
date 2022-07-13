//Ejercicio 1

function multiply(a, b){
    function dos(c){
        return c;
    }
    if(!b){
        b = dos(8);
    }
    console.log(a * b);
}

multiply(2);

//Ejercicio 2
function invocar(a, b){
    function calculo(l, a, b){
        let suma = a + b;
        if(suma < l){
            console.log(suma);
            calculo(l, b, suma)
        } 
    }
    
    console.log(a);
    console.log(b);
    calculo(3000, a, b); //Los parametros definen un limite, y los  valores con los que iniciara
}

invocar(0, 1);

