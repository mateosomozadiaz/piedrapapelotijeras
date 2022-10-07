function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

let eleccionComputadora;


let puntajeJugador = 0;

let puntajeComputadora = 0;

function reiniciar() {
    puntajeJugador = 0;
    document.querySelector(".puntaje-jugador").textContent=puntajeJugador;

    puntajeComputadora = 0;
    document.querySelector(".puntaje-computadora").textContent=puntajeComputadora;
    
    document.querySelector(".resultado").textContent="...Resultado...";
    document.querySelector(".especificaciones").textContent="...vs...";
}

function empate(vsUno, vsDos) {
    puntajeJugador++;
    document.querySelector(".puntaje-jugador").textContent=puntajeJugador;

    puntajeComputadora++;
    document.querySelector(".puntaje-computadora").textContent=puntajeComputadora;

    document.querySelector(".resultado").textContent="¡Empate!";
    document.querySelector(".especificaciones").textContent=vsUno + " vs " + vsDos;
}

function computadora(vsUno, vsDos) {
    puntajeComputadora++;
    document.querySelector(".puntaje-computadora").textContent=puntajeComputadora;

    document.querySelector(".resultado").textContent="¡Perdiste!";
    document.querySelector(".especificaciones").textContent=vsUno + " vs " + vsDos;
}

function jugador(vsUno, vsDos) {
    puntajeJugador++;
    document.querySelector(".puntaje-jugador").textContent=puntajeJugador;

    document.querySelector(".resultado").textContent="¡Ganaste!";
    document.querySelector(".especificaciones").textContent=vsUno + " vs " + vsDos;
}

function jugar(eleccionJugador) {
    eleccionComputadora = numeroAleatorio(0, 2);


    switch (eleccionComputadora) {
        case 0:
            switch (eleccionJugador) {
                case 0:
                    empate("Piedra", "Piedra");
                    break;


                case 1:
                    jugador("Papel", "Piedra");
                    break;


                case 2:
                    computadora("Tijeras", "Piedra");
                    break;


                default:
                    console.log("Ooops... Hubo un ligero problemita.");
                    break;
            }
            break;

        case 1:
            switch (eleccionJugador) {
                case 0:
                    computadora("Piedra", "Papel");
                    break;


                case 1:
                    empate("Papel", "Papel");
                    break;


                case 2:
                    jugador("Tijeras", "Papel");
                    break;


                default:
                    console.log("Ooops... Hubo un ligero problemita.");
                    break;
            }
            break;

        case 2:
            switch (eleccionJugador) {
                case 0:
                    jugador("Piedra", "Tijeras");
                    break;


                case 1:
                    computadora("Papel", "Tijeras");
                    break;


                case 2:
                    empate("Tijeras", "Tijeras");
                    break;


                default:
                    console.log("Ooops... Hubo un ligero problemita.");
                    break;
            }
            break;

        default:
            break;
    }
}

