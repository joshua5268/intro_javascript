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