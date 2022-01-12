console.log("hola mundo");

let a = 4;
let b = 5;

console.log(a+b);

if (a<b) {
    console.log(a*b);
}


// VARIABLES SON REFERENCIAS DE LOS VALORES QUE ASIGNE
// TIPO LET ES UN VALOR QUE SE PUEDE SOBREESCRIBIR

let nombreVariable = 10;
let edad = 30;
let nombre="Victor";
let sexo = "m";

console.log(nombre+nombreVariable)
nombreVariable="hola pepe"

console.log("Mi nombre es " + nombre)
console.log(nombreVariable)


// VARIABLE TIPÓ CONST NO SE PUEDE SOBREESCRIBIR

const Pi = 3.14;
const url = "google.com"

console.log("Pi" + " " + Pi)

console.log(`Pi, ${Pi}`)

console.log(Math.round(Math.random()))

// TIPOS DE DATOS

let name1="victor"; //string
let age=30; //numer
let bool=true; //boolean
let indefinido; //undefined
let nulo = null;// null
let dataUnico = Symbol("123456"); // symbol valor unico e independiente en todo el sistema
let victor = {
    nacionalidad: "peruano",
    sexo: "m",
    edad: 15,
    profesion: "sistemas",
    especialidad: "fullstack",
}; //objeto la definicion de caracteristicas de algo
 
console.log(victor)

console.log("/////")

console.log("Name",typeof name1)
console.log("Age",typeof age)
console.log("Bool",typeof bool)
console.log("indefinido", typeof indefinido)
console.log("Nulo",typeof nulo)
console.log("DataUnico",typeof dataUnico)
console.log("Victor",typeof victor)

/* CAMBIAR TIPO DE DATO*/

console.log("numero", typeof 7);
console.log("numero", typeof "7");

/*de string a numero pueden usar parseInt o parseFloat */
console.log(typeof parseInt("7"));
console.log(typeof parseFloat("3.14"))
console.log(typeof Number("12"))

/* de numero a string */

let numberData = 10

console.log(typeof String(10)) //number -> string
console.log(typeof numberData.toString())
console.log(numberData)

console.log (b + numberData)

/* prompt method muestra una ventana para que el usuario ingrese un dato */


let number1 = Number(prompt("Ingresa un numero"));
let number2 = Number(prompt("Ingresa un numero"));

console.log (number1+number2);

alert("Hola mundo")

let text;
let favDrink = prompt("What's your favorite cocktail drink?");
switch(favDrink) {
  case "Coca-Cola":
    text = "Excellent choice! Coca-Cola is good for your soul.";
    break;
  case "Pepsi":
    text = "Pepsi is my favorite too!";
    break;
  case "Sprite":
    text = "Really? Are you sure the Sprite is your favorite?";
    break;
  default:
    text = "I have never heard of that one!";
}
alert(text);
