//usar cualquie tipo de bucle para realizar una tabla de multiplicar

let tabla;
let contador = 0;
let resultado;

tabla = parseInt(prompt("Porfavor ingresa un numero : "));

while (contador <= 10) {
    resultado = tabla * contador;
    console.log(tabla + " x " + contador + " = " + resultado);
    //alert(tabla + " x " + contador + " = " + resultado);
    contador++;
}

alert("Resultado en consola")

//contar digitos de un numero
//uní los dos ejercicios propuestos por el sensei
let numero = "suma de 1 mas 6";
let numeros = "1234567890"
let i = 0;
contador =0;
resultado=0;

while (i < numero.length){
    if (numeros.includes(numero[i])) {
        contador++;
        //suma de los digitos de un numero
        resultado += parseInt(numero[i]);
    }
    i++;
}
console.log("Tiene : " + contador + " digitos");
console.log("El resultado es : " + resultado);

//encontrar numero mayor de un arreglo

let arreglo = [5, 10, 3, 8, 20, 2];

let mayor = arreglo[0];

for (let i = 1; i < arreglo.length; i++) {
  if (arreglo[i] > mayor) {
    mayor = arreglo[i]; 
  }
}

console.log("El número mayor es:", mayor);
