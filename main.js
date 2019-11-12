var readElement=document.getElementById("recogida");
var launchButton=document.getElementById("botonEjecutar");

function leer (){
    console.log(readElement.value);
}
launchButton.addEventListener('click',leer);