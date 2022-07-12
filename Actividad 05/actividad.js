
//Ejercicio 1
let secuencia = [1, 4, 6, 10, 22, 55, 46, 2, 5 , 0];

for(let i=0; i < 10; i++){
    if(secuencia[i] > 3){
        console.log(secuencia[i]);
    }
}

//Ejercicio 2
let coleccion = [];
let numeros = 10;

while(coleccion.length < 5){
    coleccion.push(numeros);
    numeros += 10;
}

console.log(coleccion);

//Ejercicio 3
let informacion = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];

informacion = informacion.sort(function(a, b){return a - b});
for(let i = 0; i < 10; i++){
    console.log(i + 1 + ".- " + informacion[i])
}