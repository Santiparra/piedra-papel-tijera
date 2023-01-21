//Llevar un puntaje (del 0 al 4), si alguno llega a 2 el juego se termina
    


    //Jugar una ronda individual
function juegaUnaRonda(elHumanoEligio, laIAEligio) {

}    

        //Función para randomizar la eleccion de la IA
function randomIA() {
    let laIAEligio = Math.floor(Math.random() * 3);
    return laIAEligio;
}    

            //Convertir los numeros del 0 al 2 a strings 
function convertirNumeroAString(){
    let laIAEligio = randomIA();
    if (laIAEligio === 0) {laIAEligio = "piedra";
    } else if (laIAEligio === 1) {laIAEligio = "papel";
    } else {laIAEligio = "tijera"}
    
    return laIAEligio;            
}
    

        //Eleccion del jugador Humano
        


            //Funcion para comparar ambos valores y definir ganador de la ronda
    


    //Recalcular los puntajes







console.log(convertirNumeroAString())