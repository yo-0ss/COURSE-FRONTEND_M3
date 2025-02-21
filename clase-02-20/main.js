
//document.getElementById("ejemplo").innerText = "Hola Mundo !";

//console.log(document.documentElement);

//console.log(document.head);

let ttitulo = document.getElementById('titulo');
ttitulo.innerText = 'Don Quijote de la Mancha';
ttitulo.style.color = 'gray'

let nuevoParrafo = document.createElement("p")
nuevoParrafo.innerText = "Es de las mejores historias que he leído"

document.body.appendChild(nuevoParrafo)

function retraso() {
    setTimeout(() => {
        let parrafoSecundario = document.createElement("p");
        parrafoSecundario.innerText = "voy a aparecer 3s despues"
        document.body.appendChild(parrafoSecundario)
    },3000);
}

retraso();

function agregarElemento() {
    let nuevoElemento = document.createElement('h3')
    nuevoElemento.innerText = "Año de Publicación :";
    document.body.appendChild(nuevoElemento)
}

const user = "admin"
const pass = "1234"


function LogIn() {
    let usuario = document.getElementById("username").value
    let password = document.getElementById("password").value

    if (usuario === user && password === pass) {
        alert(`Bienvenido ${user}`)
    }else{
        alert(`No eres bienvenido`)
    }
}