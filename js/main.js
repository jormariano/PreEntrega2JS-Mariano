/* PARA PRIMER PRE ENTREGA USAR UN CONDICIONAL, UN BUCLE Y UNA FUNCION */

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

/* let foto1 = 100;
let foto2 = 150;
let foto3 = 100;
let foto4 = 250;
let foto5 = 250;
let foto6 = 100;
let foto7 = 200; */

function precio_total(foto1, foto5) {
    return foto1 + foto5;
}

let fotos_Seleccionadas = precio_total(30, 50);

alert("El precio total de las fotos seleccionadas es de: " + fotos_Seleccionadas + " dólares")