
// Comparaciones y decisiones en JavaScript

let nota = Math.floor(Math.random() * 100) + 1;

console.log("Nota obetenida: " + nota);

if (nota < 60) {
    console.log("No apruebas");
} else if (nota >= 60 && nota <= 74) {
    console.log("Suficiente");
} else if (nota >= 75 && nota <= 89) {
    console.log("Bien");
} else if (nota >= 90 && nota <= 100) {
    console.log("Excelente");
} else {
    console.log("No es válido");
}