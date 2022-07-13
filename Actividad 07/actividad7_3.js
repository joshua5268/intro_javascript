//Ejercicio 1

function multiply(a, b){
    function dos(c){
        return c;
    }
    if(!b){
        b = prompt("Dame otro numero")
        multiply(a, b);
    }
    else{
        console.log(a * b);
    }
}

multiply(2, 3);

//Ejercicio 2

function calculo(l, a, b){
    let suma = a + b;
    if(suma < l){
        console.log(suma);
        calculo(l, b, suma)
    } 
}

console.log(0);
console.log(1);
calculo(100000, 0, 1);