//Ejercicio 1

const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];

  let menor = 100;
  let mayor = 0;
  let diferencia = 0;

  for (const familiar of Family) {
    if(mayor < familiar.age){
        mayor = familiar.age;
    }
    if(menor > familiar.age){
        menor = familiar.age
  }
}
      
diferencia = mayor - menor; 

let solucion = {
oldest: mayor,
youngest: menor,
'age-diference': diferencia
}

console.log(solucion);


//Ejercicio 2

const numbers = [ 1, -4, 12, 0, -3, 29, -150];
let sol = 0;
for (const numero of numbers) {
    if(numero > 0){
        sol += numero;
    }
}

console.log(sol);

//Ejercicio 3
const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];

let solu = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    f: 0,
    g: 0
}

for (const arr of input) {
    for (const numeros of arr) {
        switch (numeros) {
            case "a":
                solu.a++;
                break;
            case "b":
                solu.b++;
                break;
            case "c":
                solu.c++;
                break;
            case "d":
                solu.d++;
                break;
            case "f":
                solu.f++;
                break;
            case "g":
                solu.g++;
                break;
        }
    }
}

console.log(solu);

//Ejercicio 4

const arr = [3,4,6,1,5,2,9,10,23,12]

altoBajo = a => {
    let ord = a.sort((a, b) => {return a - b});
    console.log("El segundo numero menor es: " + ord[1]);
    console.log("El segundo numero mayor es: " + ord[ord.length-2]);
}

altoBajo(arr);

//Ejercicio 5

let info = [
    {
        nombre: "Diego",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 100
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 70
            },
            {
                nombreMateria: "ciencias",
                calificacion: 55
            }
        ]
    },
    {
        nombre: "Jorge",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 60
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 65
            },
            {
                nombreMateria: "ciencias",
                calificacion: 80
            }
        ]
    }
]

let calificaciones = [];
let promedios = [];
let calificacionbaja = 100;
let calificacionalta = 0;

for (const a of info) {
    let promedio = 0;
    for (const b of a.materias) {
        if(calificacionalta < b.calificacion){
            calificacionalta = b.calificacion;
        }
        if(calificacionbaja > b.calificacion){
            calificacionbaja = b.calificacion;
        }
        calificaciones.push(b.calificacion);
        promedio += b.calificacion;
    }
    promedio = promedio / 3;
    promedios.push({
        name: a.nombre,
        Promedio: promedio
    })
}


console.log(calificaciones);
console.log(promedios);
console.log(calificacionbaja);
console.log(calificacionalta);

//Ejercicio 6

matriz = [7,2,5,3,5,3];
br = [7,2,5,4,6,3,5,3];

faltantes = (a, b) => {
    let sol = [];

    for (const numero1 of b) {
        if(!a.includes(numero1)){
            sol.push(numero1);
        }
    }

    console.log(sol);
}

faltantes(matriz, br);

//Ejercicio 7

const root2 = {
    id: '123',
    child: [{
      id: '234',
      child: [{
        test: {
          id: 2
        }
      }]
    }],
    child2: [{
      id: '345',
      child3: {
        id: '534'
      }
    }]
  };