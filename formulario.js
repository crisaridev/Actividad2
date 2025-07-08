let formulario = document.querySelector(".formulario")
console.log(document.querySelector(".form"));
formulario.onsubmit = function(event) {

  event.preventDefault();

  //Acceder a los elementos del formulario mediante el atributo del elemen
  let nombre = formulario.elements["name"].value;
  let edad = parseInt(formulario.elements["age"].value);
  let nacionalidad = formulario.elements["nationality"].value;

  console.log(`${nombre} ${edad}`);


  let nacionalidadSeleccionada = nacionalidad;
  console.log(`${nacionalidadSeleccionada}`);

  //Validar nombre
  if (nombre.length === 0) {
    nombre.classList.add("error");
  }

  //Validar Edad
  if (isNaN(edad) || edad < 18 || edad > 120) {
    edad.classList.add("error")
  }
  console.log(`${edad} ${nombre.length}`);

  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  //Completar nacionalidad de la abreviacion al nombre completo
  console.log("Estoy dentro");

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("#lista-de-invitados");

var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");
lista.appendChild(elementoLista);

var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = "Nombre: ";
inputNombre.value = nombre;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
elementoLista.remove();
  }
}