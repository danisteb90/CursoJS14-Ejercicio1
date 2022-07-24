
const boton = document.querySelector ("#btn");

boton.addEventListener ("click", () => {
    alert ("click en el botón")
})

$(document).ready(() => {

$("#btn").click(() => {
    console.log("Hola estoy utilizando jQuery");
})

})