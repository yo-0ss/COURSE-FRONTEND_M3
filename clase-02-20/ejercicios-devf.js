function agregarComentario() {
    let Comentario = document.getElementById("comentario");  
    let texto = Comentario.value; 
    let fechaHora = new Date().toLocaleString();

    if (texto === "") { 
        alert("Escribe un comentario antes de agregarlo.");
        return;
    }
    let nuevoElemento = document.createElement("p");

    nuevoElemento.innerHTML= `${texto} <br> ${fechaHora}`;

    nuevoElemento.style.padding = "10px";
    nuevoElemento.style.backgroundColor = "lightgray";

    let botonEliminar = document.createElement("button");

    botonEliminar.innerText= `Eliminar`
    botonEliminar.style.marginLeft = "50px";

    botonEliminar.onclick = function () {
        nuevoElemento.remove();
    };

    nuevoElemento.appendChild(botonEliminar);

    document.getElementById("listaComentarios").appendChild(nuevoElemento); 
    Comentario.value = ""; 
}