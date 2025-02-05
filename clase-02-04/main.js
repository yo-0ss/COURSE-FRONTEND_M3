console.log('Hola Mundo!');

//Tipo de Dato Primitivo
let nombre = "Ivan";
let edad = 23;
let esMayordeEdad = true;
let saldo;
let cuenta = null;
let id = Symbol("id");
let numeroGrande = 123456789n;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof esMayordeEdad);
console.log(typeof saldo);
console.log(typeof cuenta);
console.log(typeof id);
console.log(typeof numeroGrande);

console.log(nombre);
console.log(edad);
console.log(esMayordeEdad);
console.log(saldo);
console.log(cuenta);
console.log(id);
console.log(numeroGrande);

let persona = {
    nombre: "yoss",
    edad: 18,
    nacionalidad: "Mexicana"
}

console.log(typeof persona);

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.nacionalidad);


let numeros = [1,2,3,4,5];

console.log(typeof numeros);

console.log(numeros);
console.log(numeros[0]);


let suma = function suma(a,b) { return a + b }

console.log(typeof suma);

console.log(suma(numeros[0],numeros[2]));


let fecha = new Date();

console.log(typeof fecha);

console.log(fecha);
