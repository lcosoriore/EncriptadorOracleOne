function encriptar() {
    // Obtener el texto inicial del textarea
    const texto = document.getElementById("txtTextoInicial").value;
    const conversiones = {
      "e": "enter",
      "i": "imes",
      "a": "ai",
      "o": "ober",
      "u": "ufat"
    };
    const regex = new RegExp(Object.keys(conversiones).join("|"), "g");
    // Colocar el texto encriptado en la nueva textarea
    const nuevaTextarea = document.getElementById("txtEncriptado");
    const mensajeEncriptado =texto.replace(regex, match => conversiones[match]);
    nuevaTextarea.value = mensajeEncriptado;

  }
  function desencriptar() {
    const texto = document.getElementById("txtTextoInicial").value;
    const conversiones = {
      "enter": "e",
      "imes": "i",
      "ai": "a",
      "ober": "o",
      "ufat": "u"
    };
    // Colocar el texto encriptado en la nueva textarea
    const nuevaTextarea = document.getElementById("txtEncriptado");
    const regex = new RegExp(Object.keys(conversiones).join("|"), "g");
    const mensajeEncriptado =texto.replace(regex, match => conversiones[match]);
    nuevaTextarea.value = mensajeEncriptado;
  }
  function validarTexto() {
    // Obtener el valor del área de texto
    var textoInicial = document.getElementById("txtTextoInicial").value;
    
    // Verificar que el área de texto tenga texto
    if (textoInicial === "") {
      alert("No hay mensajes para encriptar");
      return;
    }
    else{
      encriptar();
    }
  }

  function validartextoDesencriptar(){
    // Obtener el valor del área de texto
    var textoInicial = document.getElementById("txtEncriptado").value;
    
    // Verificar que el área de texto tenga texto
    if (textoInicial === "") {
      alert("No se ha encontrado un mensaje para desencriptar");
      return;
    }
    else{
      desencriptar();
    }

  }
// Asociar la función encriptarTexto al botón btnEncriptar
const btnEncriptar = document.getElementById("btnEncriptar");
btnEncriptar.addEventListener("click", validarTexto);

// Asociar la función encriptarTexto al botón btnDesencriptar
const btnDesencriptar = document.getElementById("btnDesencriptar");
btnDesencriptar.addEventListener("click", validartextoDesencriptar);
const btnCopiar = document.getElementById("btnCopiar");
const txtEncriptado = document.getElementById("txtEncriptado");

btnCopiar.addEventListener("click", function() {
  var textoInicial = document.getElementById("txtEncriptado").value;
    
    // Verificar que el área de texto tenga texto
    if (textoInicial === "") {
      alert("No se ha encontrado un mensaje para copiar");
      return;
    }
    else{
       // seleccionar el texto en el área de texto
  txtEncriptado.select();

  // copiar el texto seleccionado al portapapeles
  document.execCommand("copy");
    }
 
});
