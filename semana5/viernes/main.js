/* OBJETO elemento donde podemos modelar informacion */

let perro = {
    nombre: "puppy",
    edad: 2,
    raza: "pastor",
    pais: "peru",
    sayInfo: function(){
        console.log(this);
        // return perro.nombre + " " + perro.edad;
        return this.nombre + " " + this.edad;
    }
}
console.log(perro.sayInfo());

let computadora = {
    marca: "acer",
    procesador: "intel",
    anho: 2020,
    getMarca: function(){
        return this.marca;
    },
    getAnho: function(){
        return this.anho;
    },
    getAllDetail: function(){
        return this.marca + " " + this.procesador + " " + this.anho;
        // THIS es la referencia del objeto donde se encuentra el metodo
    },
    setMarca: function(marca){
        this.marca = marca;
    }
};

console.log(computadora.getMarca());
console.log(computadora.getAllDetail());
computadora.setMarca("mac");
console.log(computadora)

// ejemplo 2

let alumnos = {
    nombres: [],
    setAlumnos: function(nombre){
        this.nombres.push(nombre); // agrega elemento al array
    },
    getAlumno: function(nombre){
        return this.nombres.find((el) => el.nombre == nombre);
    },
};

alumnos.setAlumnos({
    nombre: "victor",
    apellido: "advincula",
    edad: 15,
    pais: "peru"
});
alumnos.setAlumnos({
    nombre: "jose",
    apellido: "advincula",
    edad: 30,
    pais: "peru"
});
alumnos.setAlumnos({
    nombre: "paola",
    apellido: "advincula",
    edad: 25,
    pais: "usa"
});

console.log(alumnos);
console.log("alumno jose", alumnos.getAlumno("jose"));

// contruccion de OBJETOS

function mobile(props){
    this.nombre = props.nombre;
}

/*CONSTRUCTOR DE OBJETOS */
function makeMobile(props) {
    this.nombre = props.nombre;
    this.modelo = props.modelo;
    this.marca = props.marca;
    this.numeroSerie = props.numeroSerie;
    this.procedencia = props.procedencia;
    this.getInfo = function () {
      return `El nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}`;
    };
  }
  
  let celularUno = new makeMobile({
    nombre: "celularUno",
    modelo: "alcatel",
    marca: "marcaUno",
    numeroSerie: "unoserie",
    procedencia: "china",
  });
  
  console.log("celularUno", celularUno.getInfo());
  
  let celuLarDos = new makeMobile({
    nombre: "celulardos",
    modelo: "iphone",
    marca: "marcados",
    numeroSerie: "dosserie",
    procedencia: "china",
  });
  
  console.log("celuLarDos", celuLarDos.getInfo());
  
  //metodos 

  console.log("victor".length); //6
  console.log("victor".charAt(3)); //t
  console.log("victor".includes("t")); //true
  console.log("victor".indexOf("o")); // posicion 4
  console.log("victor".charAt(3).toUpperCase()); //(""))

  // array

  const array = [0,1,2,3,4,5,6];
  const array2 = [7,8,9,10];
  
  console.log(array.length) // 7
  console.log(array.concat(array2)); //
  array2.push(20); // agrega al final del array
  console.log(array2)
  array.pop(); // elimina el ultimo elemento
  console.log(array);
  array.shift(); // elimina el primer elemento
  console.log(array)
  array.unshift(200); // agrega al inicio
  console.log(array)
  array.splice(2,2) // se puede eliminar elementos en el indice elegido y la cantidad de ese punto en adelante
  console.log(array)
  console.log(array.reverse()) // invierte la coleccion

  // metodo map de array 
  const mascotas = [
    {
      name: "pepe",
      edad: 1,
      raza: "uno",
      pais: "uno",
      sexo: "h",
    },
    {
      name: "mascota dos",
      edad: 2,
      raza: "dos",
      pais: "dos",
      sexo: "m",
    },
    {
      name: "boby",
      edad: 3,
      raza: "tres",
      pais: "tres",
      sexo: "h",
    },
    {
      name: "mascota cuatro",
      edad: 4,
      raza: "cuatro",
      pais: "cuatro",
      sexo: "m",
    },
  ];
  
  let numeros = [0, 1, 2, 3, 4, 5];
  
  const copiaModificada = mascotas.map((referencia) => {
    return {
      name: referencia.name,
      edad: referencia.edad,
      raza: referencia.raza,
      pais: referencia.pais,
      otraProPiedad: true,
    };
  });
  
  const copiaNumeros = numeros.map((numero) => numero + 2);
  
  console.log("copiaModificada", copiaModificada);
  console.log("mascotas", mascotas);
  
  console.log("numeros", numeros);
  console.log("copiaNumeros", copiaNumeros);
  
  // filter

  const mascHembras = mascotas.filter((masc2)=> {
      return masc2.sexo =="h"; 
  });

  const mascMachos = mascotas.filter((masc2)=> {
    return masc2.sexo =="m"; 
});

console.log("mashembras", mascHembras);
console.log("mashembras", mascMachos);

// find

const mascotUno = mascotas.find((mascotin) => mascotin.name == "pepe"
// mascotin es la referencia del valor actual
// funcion lineal sin {} da por defecto return 
);

console.log(mascotUno);

// finIndex

const posMascota = mascotas.findIndex((mascotin) => mascotin.name == "boby"
);
console.log(posMascota);

// fill

const  arrayVacio = new Array(10);

arrayVacio.fill(1);
console.log(arrayVacio);

// every
const mismoPais = mascotas.every((mascota) => mascota.pais == "peru");
console.log("mismoPais", mismoPais);

// every
const noSonDelMismoPais = mascotas.some((mascota) => mascota.pais == "peru");
console.log("noSonDelMismoPais", noSonDelMismoPais);




