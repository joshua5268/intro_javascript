let input = document.getElementById("salida");
let valor1 = 0;
let valor2 = 0;
let operador = "";

numero = (a) => {
    input.value += a;
}

mas = () => {
    valor1 = Number(input.value);
    input.value = "";
    operador = "+";
}

menos = () => {
    valor1 = Number(input.value);
    input.value = "";
    operador = "-";
}

entre = () => {
    valor1 = Number(input.value);
    input.value = "";
    operador = "/";
}

por = () => {
    valor1 = Number(input.value);
    input.value = "";
    operador = "*";
}

borrar = () => {
    input.value = "";
}

igual = () => {
    valor2 = Number(input.value);
    switch(operador){
        case "+":
            input.value = Number(valor1 + valor2);
            break;
        case "/":
            input.value = Number(valor1 / valor2);
            break;
        case "*":
            input.value = Number(valor1 * valor2);
            break;
        case "-":
            input.value = Number(valor1 - valor2);
            break;
    }
}