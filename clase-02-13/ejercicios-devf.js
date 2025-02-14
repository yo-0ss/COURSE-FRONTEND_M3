
let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo)
    console.log(titulo, "ha sido agregado.");
}

function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aun no ha añadido libros.");
        
    }else{
        console.log("Libros leídos:");
        librosLeidos.forEach((libro, index) => {
            console.log((index+1)+".",libro);
            
        })
    }
}

agregarLibro("libro 1");
agregarLibro("libro 2");

mostrarLibrosLeidos();