//funcion para sumar dos numeros
function sumar(a, b) {
  return a + b;
}

//funcion para agregar un item a la lista
function agregarItem(texto) {
  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);
}

module.exports = { sumar, agregarItem };
