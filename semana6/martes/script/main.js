const h1 = document.querySelector("h1");

console.log("%O",h1);
// TE DA TODAS LAS PROPIEDADES DEL OBJETO

const h2 = document.querySelector("h2");
console.log("%O",h2);
const h3 = document.querySelector("h3");
console.log("%O",h3);
const h4 = document.querySelector("h4");
console.log("%O",h4);
const h5 = document.querySelector("h5");
console.log("%O",h5);
const h6 = document.querySelector("h6");
console.log("%O",h6);

h6.onclick = function(){
    h6.style.color="red";
}


const p = document.querySelectorAll("p");
console.log("%O",p);

//te entrega los productos individualmente de la coleccion
for (let index = 0; index < p.length; index++) {
    console.log(p[index]);
};
p.forEach((p) => {
    console.log(p);
});


// elementos de formulario

const input = document.querySelector("input");
console.log("input",input.value);

const select = document.querySelector("select");
console.log("select",select.value);

// element link

const link = document.querySelector("a");
console.log(link);
link.href = "http://gofresh.pe";
link.id = "id.agregado";

