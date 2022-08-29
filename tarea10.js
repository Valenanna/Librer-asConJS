// librerias


const btn = document.querySelector('#myBtn')
btn.addEventListener('click', () => {

    swal.fire ({
        title: "Bien echo!", 
        text: "Lograste hacer click!, prueba seguir haciendo click sobre los otros carteles para realizar nuevas funciones", 
        confirmButtomText: "success"})

})




// declaro clase
// JS 
class autos{
    constructor(id,marcaAuto,modeloAuto,añoAuto,colorAuto){
        this.id = id,
        this.marcaAuto = marcaAuto,
        this.modeloAuto = modeloAuto,
        this.añoAuto = añoAuto,
        this.colorAuto = colorAuto
    
    }

    mostrarInformacion(){
        console.log(`El auto ${this.id} es marca ${this.marcaAuto}, modelo ${this.modeloAuto}, del año ${this.añoAuto} y su color es ${this.colorAuto}`)
    }
}

// agrego manualmente para tener ejemplos
const auto1 = new autos(1,"chevrolet","celta",2015,"rojo")

const auto2 = new autos(2,"volkswagen","gol",2012,"azul")

const auto3 = new autos(3,"renault","clio",2019,"blanco")

const auto4 = new autos(4,"ford","ka",2018,"negro")

const desguache = [auto1,auto2,auto3,auto4]

let divListado = document.getElementById("listado")
divListado.setAttribute("class", "listadoEstilos")
function mostrarCatalogo(){
    
    desguache.forEach((auto)=>{
        let nuevoAuto = document.createElement("div")
        nuevoAuto.innerHTML = `<div><h4>ID del auto: ${auto.id}, marca del auto: ${auto.marcaAuto}, modelo del auto: ${auto.modeloAuto}, año del auto: ${auto.añoAuto}, color del auto: <b>${auto.colorAuto}</b></h4></div><br> `
        divListado.appendChild(nuevoAuto)
    })

}
function ocultarCatalogo(){
    divListado.innerHTML =""
}
let mostrarCatalogoBtn = document.getElementById("verCatalogo")
mostrarCatalogoBtn.addEventListener("click", mostrarCatalogo)

let ocultarCatalogoBtn = document.getElementById("ocultarCatalogo")
ocultarCatalogoBtn.onclick = ocultarCatalogo

// agregar auto

function nuevoAuto(){
    let marcaInput = document.getElementById("marcaInput")
    let modeloInput = document.getElementById("modeloInput")
    let añoInput = document.getElementById("añoInput")
    let colorInput = document.getElementById("colorInput")

    let autoIngresado = new autos(desguache.length+1,marcaInput.value,modeloInput.value,añoInput.value,colorInput.value)
    console.log(autoIngresado)
    desguache.push(autoIngresado)
}

const guardarAutoBtn = document.getElementById
("guardarAutoBtn")
guardarAutoBtn.addEventListener("click", nuevoAuto)

let arrayJSON = JSON.stringify(desguache)
localStorage.setItem("arrayJSON", arrayJSON)

let arrayParseado = JSON.parse(localStorage.getItem("arrayJSON"))
console.log(arrayParseado)
for(let auto of arrayParseado){
    console.log(auto.modeloAuto)
}

// borrar auto

function borrarAuto(){
    let borrarAuto = parseInt(prompt("Ingrese el ID del auto que desea borrar(el ID se encuentra en el console.log)"))
    desguache.splice(borrarAuto)
}
document.getElementById("BotonBorrarAuto").onclick = function (){
    borrarAuto();
}
