/* PRIMER PRE ENTREGA */

let user = "mariaines2"
let password = "TheBeatles"

let usuario = prompt("Ingrese su nombre de usuario");

if (usuario == user) {

    let contrasenia = prompt("Ingrese su contraseña");

    if (contrasenia == password) {
        alert("¡Bienvenida " + user + "!")
    } else {
        alert("La contraseña no es correcta")
    }
} else {
    alert("El usuario ingresado es incorrecto")
}

/* let foto1 = 20;
let foto2 = 50;
let foto3 = 20;
let foto4 = 50;
let foto5 = 40; */

let precio_foto = prompt("Ingresar nombre de foto deseada");

while(precio_foto != "ESC" ){
   switch (precio_foto) {
       case "foto1":
            alert("La foto1 sale 20 dólares");
            break;
        case "foto2":
            alert("La foto2 sale 50 dólares");
            break;
        case "foto3":
            alert("La foto3 sale 20 dólares");
            break;
        case "foto4":
            alert("La foto4 sale 50 dólares");
            break;
        case "foto5":
            alert("La foto5 sale 40 dólares");
            break;
       default:
           alert("No selecciono ninguna foto")
           break;
   }
   precio_foto = prompt("Ingresar nombre de foto deseada");
}

function precio_total(foto1, foto5) {
    return foto1 + foto5;
}

let fotos_seleccionadas = precio_total(30, 50);

alert("El precio total de las fotos seleccionadas es de: " + fotos_seleccionadas + " dólares")

function precio_minimo(precio_total){
    if (fotos_seleccionadas >= 150){
        console.log("El envío es gratis")
    } else {
        console.log("Deberas pagar el envío")
    }
}

function precio_envio(){
    const Costo_Envio = 50
    return Costo_Envio + fotos_seleccionadas;
}

// SEGUNDA PRE ENTREGA

/*
let foto = {
    pais: "Alemania",
    ciudad: "Berlin",
    tamanio: 40,
}

console.log("Pais: "+foto.pais+"\nCiudad: "+foto.ciudad+"\nTamanio: "+foto.tamanio)

for (const propiedad in foto1) {
    console.log(foto1[propiedad]);
}

*/

class Foto {
    constructor(pais, ciudad, precio) {
        this.pais = pais;
        this.ciudad = ciudad;
        this.precio = precio;
        this.vendido = false;
    }
    lugar() {
        console.log("Esta foto es en " + this.ciudad + ", " + this.pais);
    }
    descripcion() {
        return "Foto en " + this.ciudad + ", " + this.pais + "; sale $" + this.precio;
    }
    vender() {
        this.vendido = true;
    }
}

const foto1 = new Foto("Alemania", "Berlin", 20);
const foto2 = new Foto("Argentina", "Buenos Aires", 50);
const foto3 = new Foto("Brasil", "Rio de Janeiro", 20);
const foto4 = new Foto("Colombia", "Bogota", 50);
const foto5 = new Foto("España", "Madrid", 40);

foto1.lugar();
foto2.lugar();
foto3.lugar();
foto4.lugar();
foto5.lugar();

let compras = ""
let rta = ""

do {
    console.log("El muestrario se integra por: \n" + foto1.descripcion()+"\n" + foto2.descripcion()+"\n" + foto3.descripcion()+"\n" + foto4.descripcion()+"\n" + foto5.descripcion())
    compras = prompt("Que foto queres comprar?");
    console.log("La foto 1 vale: \n" + foto1.precio+"\n" + "El IVA es: " + factura.detalleIva()+"\n" + "El total es: " + factura.sumaIva())
    rta = prompt("Queres seguir comprando? Pulsa una tecla, sino \"ESC\" para salir").toUpperCase();
} while (rta != "ESC");

class Factura {
    constructor(precio){
        this.precio = precio;
    }
    detalleIva() {
        return this.precio * 0.21;
    }
    sumaIva() {
        return this.precio * 1.21;
    }
}

const factura = new Factura(foto1.precio);

const ciudades = ['Berlin','Buenos Aires','Bogota','Madrid','Rio de Janeiro']

console.log(ciudades.indexOf('Bogota'))

ciudades.splice(1, 1)
console.log(ciudades)

class Video {
    constructor(ciudad, precio) {
        this.id = id;
        this.ciudad  = ciudad.toUpperCase();
        this.precio  = parseFloat(precio);
        this.venta = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

const videos = [];

videos.push(new Video(1,"Berlin", "60"));
videos.push(new Video(2,"Buenos Aires", "50"));

for (const video of videos) {
    console.log(video.ciudad);
    console.log(video.precio);
}

for (const video of videos)
    video.sumaIva();
