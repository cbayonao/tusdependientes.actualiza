var texto = document.getElementById("actualizacion")
var boton = document.getElementById("botoncito")
var fechadeestado = document.getElementById("fechaestado")
boton.addEventListener("click", actualizacionPorClick);
boton.addEventListener("push enter", actualizacionDeFecha);

function actualizacionPorClick()
{
  var xxx = (texto.value);
}

function actualizacionDeFecha()
{
	var ddd = (fechadeestado.value);
}
