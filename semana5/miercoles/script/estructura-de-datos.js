// ejemplo 1
// arrays

function ejem1() {
  //definicion de array
  let nombre = "victor";
  let nombres = ["victor", "mateo", "sofia", "paola"];
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let anidados = ["edificio uno", ["departamento", "casa"]];
  let mix = [1, "sebastian", true];
  // acceso de indice de arrays
  console.log("nombre", nombre);
  console.log("nombres", nombres);
  console.log("numeros", numeros);
  console.log("anidados", anidados);
  console.log("mix", mix);

  console.log("nombres[0]", nombres[0]);
  console.log("nombres[1]", nombres[1]);
  console.log("nombres[2]", nombres[2]);
  console.log("nombres[3]", nombres[3]);

  console.log("anidados", anidados[1][1]);
  
  // edidcion de arrays
  nombres[0] ="enrique"
  console.log(nombres)
  console.log(nombres[0])

  anidados[1][0]="hola"
  console.log(anidados)
  console.log(anidados[1][0])
}

ejem1();


//objetos 

function dos() {
    let alumno = {
        grado: 5,
        edad: 20,
        sexo:"femenino",
        nombre:"gabriela",
        apellido:"salazar",
        nacionalidad:"Peruana",
        nombreHermanos:["maria","pedro","lucas"],
    };
    let computadora = {
        marca: "Asus",
        año: "2020",
        etiqueta: "fofofo",
        procesador: "corei5",
    };
    let celular = {
        marca: "iphone",
        tamaño: "xl",
        pulgadas: 20,
        nuevo: false,
    };
    
    // acceder a valores de objetos
    console.log(alumno);
    console.log(alumno.grado);
    console.log(alumno.edad);
    console.log(alumno.nombreHermanos[0]);
    console.log(alumno.nombreHermanos[1]);
    console.log(computadora.marca)
    console.log(celular.marca);

    //array de objetos
    const celulares =[
        {
            marca:"iphone",
            tamaño: "xl",
            pulgadas: 20,
            nuevo: false,
        },
        {
            marca:"android",
            tamaño: "xll",
            pulgadas: 20,
            nuevo: false,
        },
        {
            marca:"huawei",
            tamaño: "xs",
            pulgadas: 20,
            nuevo: false,
        },
        
    ];

    console.log(celulares[0]);
    console.log(celulares[2].tamaño);
    //se llama a la propiedad de un objeto con .

    //MODIFICAR UN OBJETO
    celular.marca="xiamoi";
    console.log("celelar.marca",celular.marca);

    alumno.grado=11;
    console.log(alumno.grado);

    celulares[1].marca="oppo";
    console.log("celulares.marca",celulares[1].marca);

    //
    





}

dos()