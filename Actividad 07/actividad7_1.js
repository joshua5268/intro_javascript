//Ejercicio 1
let buscar = (a, b) => {
    if(a.includes(b)){
        console.log(`La oracion: ${a}, efectivamente contiene: ${b}`)
    }
    else{
        console.log(`La oracion: ${a}, no contiene contiene: ${b}`)
    }
}

buscar("Hola mundo", "Hola");

//Ejercicio 2
let sumaVector = a => {
    let suma = 0;
    for(let i = 0; i < a.length; i++){
        suma += a[i];
    }
    console.log(suma)
}

sumaVector([1,2,3,4,5]);

//Ejercicio 3
let palindromo = a => {
    let v = a.split("");
    let r = "";

    for(let i = v.length - 1; i >= 0; i--){
        r += v[i];
    }

    if(a == r){
        console.log("Es palindromo");
    }
    else{
        console.log("No es palindromo");
    }
}

palindromo("anitalavalatina");


//Ejercicio 4
let ocurrencias = (a,b) => {
    let v = a.split("");
    let cont = 0;
    
    for(let i = 0; i < v.length; i++){
        if(v[i] == b){
            cont++;
        }
    }

    console.log(cont);
}

ocurrencias("Esta es la actividad 7", "a");

//Ejercicio 5
let mayor = a =>{
    let m = 0;
    for(let i = 0;i < a.length; i++){
        if(a[i] > m){
            m = a[i];
        }
    }
    console.log(m)
}

mayor([45,66,32,98,1000,5,23]);


//Ejercicio 6
let temperatura = c =>{
    let f = (c*9/5) + 32;
    console.log(f);
}

temperatura(42);