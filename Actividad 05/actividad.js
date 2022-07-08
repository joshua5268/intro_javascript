
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

for(let i = 0; i < 10; i++){
    console.log(i + 1 + ".- " + informacion[i])
}




//Ejercicio 4
var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion'];
var comingSoonAnimals = ['panter', 'dragon', 'turtle'];

var nuevo = animals.concat(comingSoonAnimals);
console.log(nuevo);

//Ejercicio 5
var arr = [4, 6, 1, 0, 8, 2, 45, 11, 5, 33, 50, 101];
arr.sort(function(a, b){return b - a})
console.log(arr);

//Ejercicio 6
nuevo.push('cow');
console.log(nuevo);

//Ejercicio 7
nuevo.shift();
console.log(nuevo);

//Ejercicio 8
let index = nuevo.indexOf('parrot');
console.log(index);