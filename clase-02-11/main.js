

//Sintaxis While
let contador = 0;

while (contador <= 3) {
    contador++;
}

console.log("Ejecuto mientras sea menor o igual a 3 : "+ contador);

//Sintaxis Do-While
let numero = 0;

do {
    numero++;
} while (numero < 3);

console.log("Ejecuto mientras sea menor a 3 : "+ numero);

//Sintaxis For 
let variable = 0;

for (let i = 1; i < 10; i++) {
    variable += i;
    
}

console.log("La suma es : "+ variable);

//EJERCICIOS

//for
const numeros = [10, 15, 47, 80, 25];
for( let num of numeros){
    console.log(num);
    
}

//do-while
let respuesta;
do{
    respuesta = parseInt(prompt("Porfavor ingresa un numero mayor a 20 : "));
}while (respuesta <= 20);

alert("El numero es : " + respuesta);

//while
let text = "Este modulo es increible por que estoy aprendiendo a programar !!!";
let vocal = "aeiouAEIOU";
let counter = 0;
let i = 0;

while (i < text.length){
    if (vocal.includes(text[i])) {
        counter++;
    }
    i++;
}
console.log("El texto tiene : " + counter + " vocales");

