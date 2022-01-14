function ejemplo1() {

    let edad = prompt("Ingresa tu edad")
    // ejemplo 1

    if (edad >18) {
        alert("Bienvenido al club")
    } else {
        alert("No eres bienvenido")
    }
}

ejemplo1();

// ejemplo 2

function ejemplo2() {

    let icreCream = prompt("Ingresa tu sabor de helado")

    if (icreCream.toUpperCase() == "FRESA") {
        alert("Tu sabor es fresa")
    } else if (icreCream.toUpperCase() == "MANGO")  {
        alert("Tu sabor es mango")
    } else if (icreCream.toUpperCase() == "CHOCOLATE"){
        alert("Tu sabor es chocolate")
    } else {
        //ejecuta el valor por defecto
        alert("no tenemos ese sabor")
    }
}

ejemplo2();

//ejemplo 3

function printVehicle(type) {
  return alert("Elegiste un " + type);
}

function ejemplo3() {
  let vehiculo = prompt(
    "Por favor elige tu vehiculo(auto,moto,bicicleta,scooter)"
  );

  switch (vehiculo) {
    case "auto": {
      printVehicle("auto");
      break;
    }
    case "moto": {
      printVehicle("moto");
      break;
    }
    case "bicicleta": {
      printVehicle("bicicleta");
      break;
    }
    case "scooter": {
      printVehicle("scooter");
      break;
    }
    default: {
      alert("no hay vehiculo disponible");
    }
  }

    console.log("Se acabo el ejercicio");
}
ejemplo3();

//Ejemplo 4

function ejemplo4(){
    const sexo = prompt("Ingresa tu sexo");

    sexo=="m" ? alert("Eres masculino") : alert("Eres femenino")
    //operador ternario
}

ejemplo4();