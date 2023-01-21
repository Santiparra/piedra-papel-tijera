//Llevar un puntaje (del 0 al 4), si alguno llega a 2 el juego se termina

let laIAEligio;
let tuPuntaje = (0);
let puntajeIA = (0);

    //Jugar una ronda individual

        //Función para randomizar la eleccion de la IA y Convertir los numeros del 0 al 2 a strings

    function randomIA() {
        let randomNumero = Math.floor(Math.random() * 3);
        if (randomNumero === 0) {randomNumero = "piedra";
        } else if (randomNumero === 1) {randomNumero = "papel";
        } else {randomNumero = "tijera"}
        return randomNumero;
    }    

        //Eleccion del jugador Humano
    function turnoHumano() {        
        let cuadroDeEleccionHumano = prompt("Piedra, Papel o Tijera?");
        let elHumanoEligio = cuadroDeEleccionHumano.toLowerCase();
        return elHumanoEligio;
}  
            //Funcion para comparar ambos valores y definir ganador de la ronda
   
let resultadoRonda;
    
    function juegaUnaRonda(elHumanoEligio, laIAEligio) {
        laIAEligio = randomIA();
        if (laIAEligio === elHumanoEligio){
            resultadoRonda = "Fue un empate"
        } else if (elHumanoEligio === "piedra" && laIAEligio === "tijera" ||
            elHumanoEligio === "papel" && laIAEligio === "piedra" ||
            elHumanoEligio === "tijera" && laIAEligio === "papel") {
                tuPuntaje = ++tuPuntaje;
                resultadoRonda = `Ganaste! ${elHumanoEligio} le gana a ${laIAEligio}`
        } else {
            puntajeIA = ++puntajeIA;    
            resultadoRonda = `Perdiste! ${laIAEligio} le gana a ${elHumanoEligio}`
    }
    return resultadoRonda + tuPuntaje + puntajeIA;
    }       
    //Recalcular los puntajes

function juego () {    
    for (; tuPuntaje <5 && puntajeIA <5;) {
        juegaUnaRonda(turnoHumano(), randomIA());
        console.log(resultadoRonda + tuPuntaje + puntajeIA)
    }
}

juego()
