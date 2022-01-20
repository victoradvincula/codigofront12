const p = document.querySelectorAll("p");
// se atrapa todos los elementos
console.log(p);
console.log("%O",p[0]);

p[0].innerHTML = "<b>hOla peru desde JS<b>";
p[1].textContent="<b>hOla peru desde JS<b>";
p[2].style.backgroundColor="red";
p[2].style.color="white";

p[3].setAttribute("style", "color:red; background-color:orange");
p[3].setAttribute("class", "class-agregada"),
p[3].setAttribute("id", "id-agregado")

setTimeout(() => {
    p[3].removeAttribute("style");
    p[3].removeAttribute("class");
    p[3].removeAttribute("id");
},2000);
// remueves los atributos despues de 2 segundos con setTimeout

console.log(p[3].clientWidth);
console.log(p[3].clientHeight);