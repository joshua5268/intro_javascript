/* ## Problema 1:

Cuadre el valor de cada elemento en el array. Suponga que solo obtendrá números en la array de entrada.

`const input = [ 1, 2, 3, 4, 5 ];`

Resultado esperado:

`[ 1, 4, 9, 16, 25]`*/

const input = [ 1, 2, 3, 4, 5 ];
const output = input.map((numero) => {numero * numero});
console.log(output);

/*## Problema 2:

Calcule los valores de la media y la mediana de los elementos numéricos del siguiente arreglo.

`const input = [12, 46, 32, 64];`

Resultado esperado:

  `{ mean: 38.5, median: 32 }`

Solución*/

const input2 = [12, 46, 32, 64];
let media = input2.reduce((a, b) => {return a + b;})/4;
console.log(media);

let ordenado = input2.sort((a, b) => a - b);
if((ordenado.length % 2) != 0){
    console.log("La mediana es: " + ordenado[(ordenado.length -1)/2]);
}else{
    console.log("La mediana es: " + ordenado[ordenado.length/2])
}



/*## Problema 3

Si la entrada dada es un número, debe devolver el factorial de ese número. El factorial de un número natural n es el producto de los enteros positivos menores o iguales a n. Entonces, 2! = 2, 3! = 6, 4! = 24 y así sucesivamente.

Caso de prueba:

`const input = 6;`

Result: `720`*/

const n = 6;
let factorial = 1;

for(let i = n; i > 0; i--){
    factorial = factorial * i;
}

console.log(factorial);