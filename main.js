var readElement=document.getElementById("recogida");
var launchButton=document.getElementById("botonEjecutar");
var output=document.getElementById("salida");

function leer (){
    var resultado=(readElement.value)*1.10;
    console.log(resultado);
    output.innerText=resultado;
}
launchButton.addEventListener('click',leer);

//Prueba de fetch!!!!
let pokemon_id=4;
let url=`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`
fetch(url)
    .then(res=> res.json())
    .then (data=> {
        output.innerText=data.id;
        console.log(data);
    })


    
