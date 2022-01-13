// function uno(){
//     function suma(a,b){
//         if (arguments.length>2) {
//             throw console.error("No soporta la suma de mas de 2 argumentos")
//         }
//         return a + b;
//     }

//     console.log(suma(2,3));
//     console.log(suma(2,3,4,5,6));
// }

// uno();

//try catch
//control de flujo

function dos() {
  let message = "";
  const nombre = prompt("Ingresa tu nombre");

  try {
    if (nombre.length < 6) {
      throw "Muy corto";
    } else if (nombre.length > 10) {
      throw "Muy largo";
    }

    message = "El nombre " + nombre + " es correcto";
  } catch (error) {
    if (error == "Muy corto") {
      message = "El nombre " + nombre + " es muy corto ";
    } else if (error == "Muy largo") {
      message = "El nombre " + nombre + " es muy largo";
    }
  } finally {
    console.log(message);
  }
}

dos();
