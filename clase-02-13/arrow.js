const suma = (x, y) => x + y;
console.log(suma(10,20));


const saludar = (nombre) =>{
    return `Hola ${nombre}`
}
console.log(saludar('Oscar'));


const numeros = [1,2,3,4,5,6,7,8]
const multiplicados = numeros.map(num => num * 5)
console.log(multiplicados);
