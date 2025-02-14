
//palindromo
//funcion que verifica si una funcion es palindroma
function esPalindromo(palabra) {
    palabra = palabra.toLowerCase();
    let palabraInvertida = palabra.split('').reverse().join('');
    return palabra === palabraInvertida;
}

let palabra = 'Ana';
console.log(`"${palabra}" es un palindromo?`, esPalindromo(palabra)); 

//filtra los numeros mayores a un valor dado

let numero = 15;
let opcionesNumeros = [1, 5, 10, 17, 19, 20];

function mayores(opcionesNumeros, numero) {
    let mayor = []; 

    for (let i = 0; i < opcionesNumeros.length; i++) { 
        if (opcionesNumeros[i] > numero) {
            mayor.push(opcionesNumeros[i]); 
        }
    }

    console.log("Los mayores son:", mayor);
}

mayores(opcionesNumeros, numero);

//operaciones matematicas
function multiplicar(a, b) {
    return a * b;
}

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}
function division(a, b) {
    return a / b;
}
function residuo(a, b) {
    return a % b;
}
function potencia(a) {
    return a*a;
}

const a = 19
, b = 2;

console.log("Suma:", suma(a,b));
console.log("Resta:", resta(a,b));
console.log("Multiplicación:", multiplicar(a,b));
console.log("División:", division(a,b));
console.log("Residuo:", residuo(a,b));
console.log("A al cuadrado:", potencia(a));
