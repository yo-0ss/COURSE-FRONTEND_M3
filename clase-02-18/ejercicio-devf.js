class Libro {
        constructor(titulo, autor, anio, estado) {
            this.titulo = titulo;
            this.autor = autor;
            this.anio = anio;
            this.estado = estado;
            this.capitulos = [];
    }
  
        describirLibro() {
            const texto = `El libro "${this.titulo}", fue escrito por ${this.autor} en el año ${this.anio}, y el estado actual es: ${this.estado}.`;
            let nuevoElemento = document.createElement("p");

            console.log(texto);
            nuevoElemento.innerHTML= texto;
            document.getElementById("listaLibros").appendChild(nuevoElemento); 
        }
  
        agregarCapitulo(capitulo) {
            this.capitulos.push(capitulo);
            console.log(`Capítulo "${capitulo}" agregado.`);
        }
  
        eliminarCapitulo(capitulo) {
            const index = this.capitulos.indexOf(capitulo);
            if (index !== -1) {
                this.capitulos.splice(index, 1);
                console.log(`Capítulo "${capitulo}" eliminado.`);
            } else {
                console.log(`El capítulo "${capitulo}" no se encontró en la lista.`);
            }
        }
    }
  

const libro1 = new Libro("El Principito", "Antoine de Saint-Exupéry", 1943, "disponible");

libro1.describirLibro();
libro1.agregarCapitulo("Capítulo 1: El encuentro");
libro1.agregarCapitulo("Capítulo 2: El viaje");
console.log(libro1.capitulos); 
libro1.eliminarCapitulo("Capítulo 1: El encuentro");
console.log(libro1.capitulos);
libro1.describirLibro();