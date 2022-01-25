// SERIVIOS USANDO FETCH

fetch("https://61ef3d13d593d20017dbb39d.mockapi.io/users") // hago peticion al endpoint - el fetch es un evento de peticion al servidor
  // then es un metodo - se usa para dato obtener datos de una promesa que no se cuando se va a resolver
  .then(function (response) {
    return response.json(); // interpreso como formato json
  })
  .then((response) => {
    // recibi el dato de la promesa
    console.log("respuesta", response);
  })
  .catch((err) => {
    console.log("error", err);
  });

function createUser() {
    /*
    Retorna objeto con valores del usuario
  */
  function getValuesUser() {
    return {
      name: document.querySelector(".js_name").value,
      lastname: document.querySelector(".js_lastname").value,
      cellphone: document.querySelector(".js_cellphone").value,
      photo: document.querySelector(".js_photo").value,
      description: document.querySelector(".js_description").value,
    };
  }
}
 /*
    Funcion post para guardar usuarios
  */
    function saveUser(user, callback) {
        fetch("https://61ef3d13d593d20017dbb39d.mockapi.io/users", {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then(() => {
            callback();
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
      /*
        Funcion get para obtener usuarios
      */
      function getUsers(callback) {
        fetch("https://61ef3d13d593d20017dbb39d.mockapi.io/users") // hago peticion al endpoint
          .then((usuarios) => {
            return usuarios.json(); // interpreto como formato jjson
          })
          .then((usuarios) => {
            callback(usuarios);
          })
          .catch((error) => {});
      }
    
      /*
       Funcion para crear tarjeta usuarios
      */
      function makeCardUser(user) {
        const cardUser = document.createElement("article");
        cardUser.innerHTML = `
            <div class="card">
                <img src=${user.photo} class="card-img-top" >
                <div class="card-body">
                    <h5 class="card-title">${user.name} ${user.lastname}</h5>
                    <h5 class="card-title">${user.cellphone}</h5>
                    <p class="card-text">${user.description}</p>
                </div>
                <button>X</button>
            </div>
         `;
    
        cardUser.classList.add("col", "col-4", "mb-4");
        cardUser.querySelector("button").onclick = function () {
          if (confirm("Estas seguro que deseas eliminar esta carta?")) {
            cardUser.remove();
          }
        };
    
        return cardUser;
      }
    
      /*
      Agregar elementos nodo en el document
      */
      function addDom(node, container) {
        const app = document.getElementById(container);
        app.appendChild(node);
      }
    
      function eventForm() {
        const form = document.querySelector("form"); // tomo el formulario
        form.onsubmit = function (event) {
          // se registra evento de formulario
          event.preventDefault(); // se quita comportamiento por defecto del formulario
    
          saveUser(getValuesUser(), function (response) {
            // se ejecuta saveUser
            console.log("aca en esto momento se creo un usuario!!!");
            getUsers(function (users) {
              users.forEach((user) => {
                addDom(makeCardUser(user), "app");
              });
            });
          });
        };
      }
    
      getUsers(function (users) {
        users.forEach((user) => {
          addDom(makeCardUser(user), "app");
        });
      });
    
      eventForm();
    
    
    createUser(); // se ejecuta createUser
 