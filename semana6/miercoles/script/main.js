// eventos

const button = document.querySelector(".js_button");
const button2 = document.querySelector(".js_button1");

console.log("%O",button);

// button.onclick = () =>{
//     const menu = document.querySelector(".menu");
//     if (menu.style.display == "block") {
//         menu.style.display = "none";
//     } else {
//         menu.style.display = "block"
//     }
// }

function toggleMenu() {
    const menu = this.querySelector(".menu"); // atrapando el elemento menu
    // selector relativo
    if (menu.style.display == "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  };

  button.onclick = toggleMenu;
  button2.onmouseover = toggleMenu;
  button2.onmouseout = toggleMenu;

  const button3 = document.querySelector(".js_button_3");
button3.onclick = function () {
  button.style.backgroundColor = "purple";
};


// ejemplo de objeto con sus propiedades
//
//
const usuario = {
  name: "sebastian",
  lastname: "yabiku",
  getFullName: function () {
    console.log(this);
  },
};

console.log("%O", usuario);
console.log("%O", button);

// usuario.getFullName = toggleMenu;
// console.log("%O", usuario);

