// Dom

//ejercicio 1
setTimeout(() => {
  const p = document.querySelectorAll("p");
  const a = p[0].querySelector("a");

  p[0].setAttribute(
    "style",
    "color:red; background-color:orange; font-size:50px; font-family:Tahoma;"
  );
  p[1].setAttribute(
    "style",
    "color:red; background-color:blue; font-size:40px; font-family:Tahoma;"
  ),
    p[2].setAttribute(
      "style",
      "color:red; background-color:yellow; font-size:30px; font-family:Tahoma;"
    );
  a.setAttribute("class", "class-agregada");
  a.href = "http://gofresh.pe";
  a.text = "id.agregado";
}, 2000);

/*
DOM - EJERCICIO DOS
Dado una estructura de ul
Capturar cada uno de los li y agregarle los siguients estilos
fontSize
color
backgroundColor
tambien modificar su contenido y agregarle la palabra hola mundo
para este ejercicio utilizar querySelectorAll
*/


/*
DOM EJERCICIO TRES
Dado una estructura de divs
Atrapar el primer elemento y modificar sus estilos
backgroundColor
fontSize
color
fontFamily
Atrapar el ultimo elemento y modificar sus estilos
backgroundColor
fontSize
color
fontFamily
Atrapar el segundo elemento y modificar sus estilos
backgroundColor
fontSize
color
fontFamily
utilizar nextElementSibling, prevElementSibling, firstElement, lastElement
*/

