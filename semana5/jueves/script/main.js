// eje2

// // function exe2() {
// //     let nota =[0,0,0,0]
// //     nota[0] = Number(prompt("Ingresa primera nota"));
// //     nota[1] = Number(prompt("Ingresa segunda nota"));
// //     nota[2] = Number(prompt("Ingresa tercera nota"));
// //     nota[3] = Number(prompt("Ingresa cuarta nota"));

// //     let sum = nota[0] + nota[1] + nota[2] + nota[3];
// //     let prom = sum / 4;
// // let prom2= sum/nota.length;
// //     console.log(prom);
// //     alert(prom);
// // }
// // exe2();

/* */

// area del rectangulo
// // function exe3() {
// //     let length=Number(prompt("Ingresa la altura"));
// //     let width=Number(prompt("Ingresa el ancho"));

// //     let area = length * width;
// //     alert("El area del rectagulo es " + area);
// //     console.log(area);
// // }

// // exe3();

/* */

// area de triangulo

// // function exe4() {
// //     let base=Number(prompt("Ingresa la base"));
// //     let altura=Number(prompt("Ingresa el altura"));

// //     let area = (base * altura) / 2;
// //     alert("El area del triangulo es " + area);
// //     console.log(area);
// // }

// // exe4();

/* */
// area de la circunferencia

// // function exe5(){
// //     const pi = Math.PI;
// //     let radio = Number(prompt("Ingresa el valor del radio"));

// //     let area = pi * Math.pow(radio,2);
// //     alert("El area del circulo es " + area);
// //     console.log(area);
// // }

// // exe5();

/* */
// sueldo semanal

// // function exe6() {
// //     let hora = Number(prompt("Ingresa las horas trabajadas"));
// //     let costoHora = 4.84375;
// //     alert("El costo de la hora es " + costoHora);

// //     let sueldo = hora * costoHora;
// //     console.log("El salario total es " + sueldo);
// //     alert("El salario total es " + sueldo);
// // }
// // exe6();

/* */
//ejercicio 7 metros a pulgadas

// // function exe7() {
// //     const pul = 0.0254;
// //     let metrosReq = Number(prompt("Ingresa el numero de metros requeridos"));

// //     let req = metrosReq / pul;
// //     alert("El total de metro requeridos en pulgadas es " + req);
// //     console.log(req);
// // }
// // exe7();

/* */

// ejercicio 8 tipo de cambio

// // function exe8() {
// //     let tc = 3.91
// //     let soles = Number(prompt("Ingresa el monto que desea cambiar"));

// //     let monto = soles / tc;
// //     alert(soles + " al tipo de cambio de " + tc + " serian " + monto.toFixed(2));
// //     console.log(monto);
// // }
// // exe8();

/* */
// ejercicio 9 edad de empleados

// function exe9() {
//     let anoActual = new Date().getFullYear;
//     let fechaNac = Number(prompt("¿Que año nacieron?"));

//     let edad = anoActual - fechaNac;
//     alert("El postulante tiene " + edad + "años");
//     console.log(edad);
// }

// exe9();

// ejercicio 10

function exe10() {
  const personas = [
    {
      nombre: "mario",
      edad: 5,
    },
    {
      nombre: "paola",
      edad: 10,
    },
    {
      nombre: "victor",
      edad: 20,
    },
  ];

  let menorEdad = {
    nombre: "",
    edad: 0,
  };

  if (personas[0].edad > personas[1].edad) {
    menorEdad.nombre = personas[1].nombre;
    menorEdad.edad = personas[1].edad;
  } else if (personas[1].edad > personas[2].edad) {
    menorEdad.nombre = personas[2].nombre;
    menorEdad.edad = personas[2].edad;
  } else {
    menorEdad.nombre = personas[0].nombre;
    menorEdad.edad = personas[0].edad;
  }
  console.log(menorEdad.nombre);
  console.log(menorEdad.edad);
}

exe10();

// ejercicio 13

// function exe13() {
//     const alum = [
//       {
//         nombre: "melissa",
//         calificacion: 14,
//       },
//       {
//         nombre: "jose",
//         calificacion: 14,
//       },
//       {
//         nombre: "pepe",
//         calificacion: 08,
//       },
//       {
//         nombre: "jose",
//         calificacion: 14,
//       },
//     ];

//     let status = {
//       aprobados: 0,
//       desaprobados: 0,
//     };

//     for (let index = 0; index < alum.length; index++) {
//       console.log(index);
//       console.log(alum[index]);
//       if (alum[index].calificacion > 11) {
//         status.aprobados = status.aprobados + 1;
//       } else {
//         status.desaprobados = status.desaprobados + 1;
//       }
//     }
//     console.log("estadoAlumnos", status);
//   }

//   exe13();

//   // ejercicio 13-2

//   function exe14() {
//     let focos = [
//       "verde",
//       "rojo",
//       "blanco",
//       "verde",
//       "rojo",
//       "blanco",
//       "verde",
//       "rojo",
//       "blanco",
//       "verde",
//       "rojo",
//       "blanco",
//       "verde",
//       "rojo",
//       "blanco",
//       "verde",
//       "verde",
//       "verde",
//       "blanco",
//       "blanco",
//       "blanco",

//     ];

//     let colores = {
//       verde: 0,
//       rojo: 0,
//       blanco: 0,
//     };

//     for (let index = 0; index < focos.length; index++) {
//       if ((focos[index] === "verde")) {
//         colores.verde = colores.verde + 1;
//       } else if ((focos[index] === "rojo")) {
//         colores.rojo = colores.rojo + 1;
//       } else {
//         colores.blanco = colores.blanco + 1;
//       }
//     }

//     console.log("colores",colores);
//   }

//   exe14();

// https://github.com/makeitrealcamp/js-foundation
