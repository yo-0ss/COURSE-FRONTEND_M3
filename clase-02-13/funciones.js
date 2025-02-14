//EJEMPLOS

saludar();

saludarAlguien("Yoss");

saludarInvitado();
saludarInvitado("yoss");

let resultado = multiplicar(25, 5);
console.log(resultado);



//Función SIN parametro
function saludar(/* no tiene */) {
    console.log("Hola mundo!");
    
}

//Función CON parametro
function saludarAlguien(nombre) {
    console.log("Hola", nombre);
    
}

//Función con valor por defecto
function saludarInvitado(nombre="invitado") {
    console.log("Hola, bienvenido",nombre);
    
}

//Función retorna
function multiplicar(a, b) {
    return a * b;
}


