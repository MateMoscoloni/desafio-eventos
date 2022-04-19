class Juego {
    constructor(nombre, formato, precio, info){
      this.nombre = nombre;
      this.formato = formato;
      this.precio = precio;
      this.info = info;
    }
    agregarJuego(producto){
      this.productos.push(producto);
    }
    //le suma el 65% de impuestos por compras
    calcularTotal() {
      return this.precio * 1.65;
    }
}

const juego1 = new Juego("elden ring", "digital", 4999, "un juego de aventura mundo abierto. De los creadores de Dark Souls")
const juego2 = new Juego("hades", "digital", 329, "un roguelite basado en la mitología griega")
const juego3 = new Juego("hunt", "digital", 799, "un battleroyale ambientado en los 70'")
const juego4 = new Juego("portal", "físico, edición coleccionista", 1799, "un clásico de la compañía Valve")
const juegos = new Array(juego1, juego2, juego3, juego4);

const contenedor = document.getElementById('container');

function crearJuego(name, type, price){
    let juego = `
            <h5>${name} en formato ${type}. Su valor es de $${price}</h5>
    `;
    contenedor.innerHTML+=juego
}

enviarDatos()

function enviarDatos(){
    let veriJ = document.getElementById("form")
    let tlw = document.getElementById("text")
    tlw.addEventListener('input',function(){this.value=this.value.toLowerCase()});
    veriJ.addEventListener("submit", mostrarJuego)
}

function mostrarJuego(valor){
    valor.preventDefault();
    let dato = valor.target; 
    console.log(dato.children[1].value)
    if (dato.children[1].value == "elden ring"){
        crearJuego(juego1.nombre,juego1.formato,juego1.calcularTotal());
    } else if (dato.children[1].value == "hades") {
        crearJuego(juego2.nombre,juego2.formato,juego2.calcularTotal());
    } else if (dato.children[1].value == "hunt") {
        crearJuego(juego3.nombre,juego3.formato,juego3.calcularTotal());
    } else if (dato.children[1].value == "portal") {
        crearJuego(juego4.nombre,juego4.formato,juego4.calcularTotal());
    } else alert ("Lo sentimos, no tenemos el juego seleccionado disponible")
}

