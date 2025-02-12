

let frutas = [
    { nombre: "manzana", categoria: "ácidas" },
    { nombre: "plátano", categoria: "dulces" },
    { nombre: "aguacate", categoria: "neutras" },
    { nombre: "naranja", categoria: "ácidas" },
    { nombre: "pera", categoria: "dulces" },
    { nombre: "fresa", categoria: "semiácidas" },
    { nombre: "uva", categoria: "ácidas" },
    { nombre: "pera", categoria: "dulces" },
    { nombre: "aguacate", categoria: "neutras" },
    { nombre: "coco", categoria: "neutras" },
    { nombre: "mango", categoria: "semiácidas" }
  ];
  
  let conteoFrutas = {};
  

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i].nombre;
    let categoria = frutas[i].categoria;

    if (!conteoFrutas[categoria]) {
        conteoFrutas[categoria] = {}; 
      }
  
    if (conteoFrutas[categoria][fruta]) {
      conteoFrutas[categoria][fruta]++;
    } else {
      conteoFrutas[categoria][fruta] = 1; 
    }
  }
  
  console.log("Conteo de frutas por categoría:", conteoFrutas);