
//comprobacion de números pares e impares

let valorRandom = Math.floor(Math.random() * 100) + 1;

console.log("El número a valorar es : "+ valorRandom);

if (valorRandom % 2 == 0) {
    console.log("El número " + valorRandom + " es par");
} else {
    console.log("El número " + valorRandom + " NO es par");
}

// compare si un número es primo

if (valorRandom == 1) {
    console.log(valorRandom + " no es un número primo.");
} else {
    let esPrimo = true;

    for (let i = 2; i < valorRandom; i++) {
        if (valorRandom % i === 0) { 
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log(valorRandom + " es un número primo.");
    } else {
        console.log(valorRandom + " no es un número primo.");
    }
}

// estacion del año en que estamos

let mes  = Math.floor(Math.random() * 12) + 1;
console.log("El mes a valorar es : " + mes);

switch (mes) {
    case 1:
    case 2:
    case 12:
        console.log("Es invierno");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Es primavera");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Es verano");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Es otoño");
        break;
    default:
        console.log("No es válido");
        break;
}
