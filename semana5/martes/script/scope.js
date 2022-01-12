// funcion declarativa
function nombreFuncion(nombre,apellido) {
    console.log(nombre);
    console.log(apellido);
}

nombreFuncion("marco","soto");
nombreFuncion("victor","advincula")

//funcion pura

function suma(a,b) {
    return(a+b);
}

function resta(a,b) {
    return(a-b);
}

console.log("la suma da como resultado " + suma(10,7))

function main() {
    console.log("la suma es " + suma(500,567));
    console.log("la suma es " + suma(10,5));
    console.log("la suma es " + suma(10,3));
    console.log("la suma es " + suma(10,6));
    console.log("la resta es " + resta(500,567));
    console.log("la resta es " + resta(10,5));
    console.log("la resta es " + resta(10,3));
    alert("la suma es " + suma(600,800));
}

main();

// solo se deben definir variables globales Constantes
// no es buena practica definir variables Let globales
// SOLO SE PUEDE ACCEDER DE LOCAL A GLOBAL FUNCIONA PARA LAS VARIABLES Y FUNCIONES -> IMPORTANTE

const a = 10;
const b = 15;

function fn() {
    let a = 2;
    console.log(a);
}

fn() // resultado 2
console.log(a) // resultado 10
