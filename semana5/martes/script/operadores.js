// operadores de matematicos

console.log(2 + 2); //suma
console.log(2 - 2); //resta
console.log(2 * 2); //multiplicacion
console.log(2 / 2); //division
console.log(11 % 3); //resto -> 2
console.log(2 ** 4); //potencia

// operadores de asignacion

let number = 1000;

// operador incremento

console.log(number);

number ++;
console.log(number);

console.log(number += 1000);

number --;
console.log(number);

console.log(number -= 500)

// operadores de comparacion

let numberOne = 10;
let numberTwo = 20;
let numberThree ="10"

console.log(numberOne > numberTwo); //false
console.log(numberOne < numberTwo); //true
console.log(numberTwo >= numberOne); // true
console.log(numberTwo <= numberOne); // false
console.log(numberOne != numberTwo); // diferemte --> true
console.log(numberOne == numberThree); // comparacion en valor -> true
console.log(numberOne === numberThree); // comparacion en tipo y valor -> true
console.log(numberOne !== numberThree); // es diferente en Tipo -->true

// operadores logicos

let numberOneLogic = 10;
let numberTwoLogic = 20;
let numberThreeLogic = "10";
let nameLogic = "victor"
let hija = "valentina"

console.log(numberOneLogic > 5 && nameLogic === "victor"); // true -> comparacion multiple
console.log(numberOneLogic > 5 && nameLogic === "victor" && hija === "johama"); //false 
console.log((numberOneLogic > 5 && nameLogic === "victor") || hija === "johama"); //true
console.log(!(hija === "valentina")); // false -> negacion
console.log(
    "KATYA".length > 4 && "KATYA" == "KATYA" && "KATYA".charAt(0) == "K"
  ); // true







