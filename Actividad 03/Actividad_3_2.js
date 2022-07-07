
function residuo(){
    let num1 = Number(prompt('Cual es el numero a dividir?'));
    let num2 = Number(prompt('Cual es el numero divisor'));
    let res = num1 % num2;

    if(res == 0){
        alert('El numero es divisible');
    }
    else{
        alert('El numero no es divisible');
    }

}

function par(){
    let numero = Number(prompt('Cual es el numero a validar?'));
    let res = numero % 2;


    if(res == 0){
        alert('El numero es par');
    }
    else{
        alert('El numero no es par');
    }
}

function premio(){
    let numero = Number(prompt('Introduce un numero..'));

    if(numero == 1000){
        alert('Felicidades ganaste un premio!!!');
    }
    else{
        alert('Sigue participando');
    }
}

function menor(){
    let num1 = Number(prompt('Introduce el primer numero'));
    let num2 = Number(prompt('Introduce el segundo numero'));

    if(num1 < num2){
        alert('El numero ' + num1 + ' es menor');
    }
    else{
        alert('El numero ' + num2 + ' es menor');
    }
}


function mayor3(){
    let num1 = Number(prompt('Introduce el primer numero'));
    let num2 = Number(prompt('Introduce el segundo numero'));
    let num3 = Number(prompt('Introduce el tercer numero'));

    if(num1 > num2 && num1 > num3){
        alert('El numero ' + num1 + ' es mayor');
    }
    else if(num2 > num1 && num2 > num3){
        alert('El numero ' + num2 + ' es mayor');
    }else if(num3 > num1 && num3 > num2){
        alert('El numero ' + num3 + ' es mayor');
    }else if(num1 == num2 && num1 > num3){
        alert('Los numeros ' + num1 + ' son mayores e iguales');
    }else if(num1 == num3 && num1 > num2){
        alert('Los numeros ' + num1 + ' son mayores e iguales');
    }else{
        alert('Los numeros ' + num2 + ' son mayores e iguales');
    }
}
