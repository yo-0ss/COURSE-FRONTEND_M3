
//Función anonima
const anonima = function() {
    console.log("hola");
    
}

anonima();

//callback
setTimeout(function() {
    console.log("este comentario va a tardar");
    
}, 2000);

const arrowFuntion = () => {
    console.log("hola es una flecha =>");
    
}

arrowFuntion();

document.getElementById("boton").addEventListener("click", function() {
    alert("hola mundo")
})
