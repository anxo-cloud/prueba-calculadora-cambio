var readElement=document.getElementById("recogida");
var launchButton=document.getElementById("botonEjecutar");
var output=document.getElementById("salida");

function leer (){
    var resultado=(readElement.value)*1.10;
    console.log(resultado);
    output.innerText=resultado;
}
launchButton.addEventListener('click',leer);