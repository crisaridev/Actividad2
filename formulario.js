//Se cambiaron la declaracion de variables de var a let; Ya que con Var se podria
//Inicializar nuevamente la variable cosa que en EMS6 ya no se utiliza el var
//Se pone el atributo class al elemento form
let formulario = document.querySelector(".formulario")
formulario.onsubmit = function(event) {

  //Aqui se agrega el Default que estaba incorrectamente anteriormente
  event.preventDefault();

  //Acceder a los elementos input del formulario mediante el atributo name del elemento.
  let nombreInput = formulario.elements["name"];
  let edadInput = formulario.elements["age"];
  let nacionalidadInput = formulario.elements["nationality"];

  //Se asigna el valor de los inputs
  let nombre = nombreInput.value;
  let edad = parseInt(edadInput.value);
  let nacionalidad = nacionalidadInput.value;

  //Validar que la longitud del nombre sea 0 para comprobar que no este vacio.
  if (nombre.length === 0) {
    nombreInput.classList.add("error");
  }

  //Validar Edad este sea mayor de 18 y menor de 120.
  //y que si se ingresa un caracter que no sea numero mande un error
  if (isNaN(edad) || edad < 18 || edad > 120) {
    edadInput.classList.add("error")
  }

  //Si se cumplenten las 3 condiciones
  // Que el nombre no este vacio
  //Sea mayor de 18 y menor de 120 años se agregue el invitado
  //Manda a llamar la funcion "AgregarInvitado"
  if (nombre.length > 0 && edad > 18 && edad < 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
}

//Se crea un elemento button con el texto Eliminar Invitado
let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
//Se le asigna el id "boton-borrar"
botonBorrar.id = "boton-borrar";

//Se crea un elemento br
//Esto se hace para que el botón no esté pegado a otros elementos y se vea más claro visualmente
let corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  //Completar nacionalidad de la abreviacion al nombre completo
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  //Seleccionamos el elemento Div con el id "lista-de-invitados"
  let lista = document.getElementById("lista-de-invitados");

  //Creamos un elemento Div
  //Este div se usará para contener la información de un invitado
  let elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    let spanNombre = document.createElement("span");
    let inputNombre = document.createElement("input");
    let espacio = document.createElement("br");

    //Asignamos el texto descriptivo y el valor a mostrar
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;

    //Agregamos los elementos al div del invitado
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  //Se asigna la funcionalidad al botón de eliminar
  //Este evento se ejecuta cada vez que se agrega un nuevo invitado
  //y elimina ese div específico
  botonBorrar.onclick = function () {
    elementoLista.remove();
  }
}