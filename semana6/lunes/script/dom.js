// conjunto de funcionalidad que nos van a permitir editar elementos y agregalos en el html
// atrapar el elemento
const h1 = document.querySelector("h1");
console.log(h1);
const h2 = document.querySelector("h2");

// propiedades y metodos
h1.style.color = "#ffb500";
h1.style.fontSize = "50px";
h1.innerHTML = "Hola Victor Advincula";

h2.style.color = "#ffb500";
h2.style.fontSize = "50px";

// registrar un evento 

h1.onmouseover = function(){
    h1.style.fontSize = "100px";;
};

h1,onmouseout = function(){
    h1.style.fontSize = "50px";;
};

function addSize() {
    this.style.fontSize = 
    Number(this.style.fontSize.replace("px","")) + 10 + "px";
};

function removeSize() {
    this.style.fontSize = 
    Number(this.style.fontSize.replace("px","")) - 10 + "px";
};

h2.onmouseover = addSize;
h2.onmouseout = removeSize;
h2.onclick = addSize;

