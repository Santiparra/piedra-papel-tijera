//Llevar un puntaje (del 0 al 4), si alguno llega a 2 el juego se termina

let laIAEligio;
let elHumanoEligio;
let tuPuntaje = (0);
let puntajeIA = (0);
let resultadoRonda;
let resultadoFinal;

    //Jugar una ronda individual

        //Función para randomizar la eleccion de la IA y Convertir los numeros del 0 al 2 a strings

    function randomIA() {
        let randomNumero = Math.floor(Math.random() * 3);
        if (randomNumero === 0) {randomNumero = "piedra";
        } else if (randomNumero === 1) {randomNumero = "papel";
        } else {randomNumero = "tijera"}
        return randomNumero;
    }    
 
            //Funcion para comparar ambos valores y definir ganador de la ronda
    
function juegaUnaRonda() {
        //elHumanoEligio = "piedra";
        laIAEligio = randomIA();
        if (laIAEligio === elHumanoEligio){
            resultadoRonda = "Fue un empate!"
        } else if (elHumanoEligio === "piedra" && laIAEligio === "tijera" ||
            elHumanoEligio === "papel" && laIAEligio === "piedra" ||
            elHumanoEligio === "tijera" && laIAEligio === "papel") {
                tuPuntaje = ++tuPuntaje;
                resultadoRonda = `Ganaste! ${elHumanoEligio} le gana a ${laIAEligio}!`
        } else {
            puntajeIA = ++puntajeIA;    
            resultadoRonda = `Perdiste! ${laIAEligio} le gana a ${elHumanoEligio}!`
    }
    console.log(resultadoRonda + tuPuntaje + puntajeIA);
}       
    //Funcion Global y loop para llevar tanteador

function juego () {    
    for (; tuPuntaje <5 && puntajeIA <5;) {
        juegaUnaRonda();
        //Para que los logs salgan prolijos
            if (tuPuntaje < puntajeIA){ 
                console.log(resultadoRonda + " Vas perdiendo " + tuPuntaje + " a " + puntajeIA)
            } else if (tuPuntaje > puntajeIA){
                console.log(resultadoRonda + " Vas ganando " + tuPuntaje + " a " + puntajeIA)
            }else {console.log(resultadoRonda + " Vas empatando " + tuPuntaje + " a " + puntajeIA)}    
    } 
        //Resultados finales
                if (tuPuntaje === 5) {console.log(" Campeon! Ganaste: " + tuPuntaje + " a " + puntajeIA)}
                else {console.log(" Lo siento, perdiste " + tuPuntaje + " a " + puntajeIA)}
}

//Seccion UI
    
    //Botones de imput humano

const botones = document.querySelectorAll('.seleccionHumano');

botones.forEach((button) => {button.addEventListener('click', () => {
    elHumanoEligio = button.id;
    if (tuPuntaje <5 && puntajeIA <5) {juegaUnaRonda();
    } else {reinicio ()}
    marcadorHumano();
    marcadorIA();
    textorondas();
})
})

    //Display
const tuMarcador = document.querySelector("#tu-puntaje")
const marcadorCompu = document.querySelector("#puntaje-IA")

        //Tanteador
function marcadorHumano() { 
    tuMarcador.textContent = tuPuntaje;
}

function marcadorIA() { 
    marcadorCompu.textContent = puntajeIA;
}  
        //Ronda
const dialogos = document.querySelector("#resultados")
//const ronda = document.createElement('div');
//ronda.classList.add("rondas");

function textorondas() { 
    dialogos.textContent = resultadoRonda;
//    dialogos.appendChild(ronda)
}

const botondeReinicio = document.querySelector('.botonReinicio');

botondeReinicio.addEventListener('click', () => {
    tuPuntaje = 0;
    puntajeIA = 0;
    marcadorHumano();
    marcadorIA();
  });