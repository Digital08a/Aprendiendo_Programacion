
function sumaTotal() {

    const horasVideos = document.querySelectorAll('.horas');
    const minutosVideos = document.querySelectorAll('.minutos');
    const segundosVideos = document.querySelectorAll('.segundos');
    const segundosEnHora = 3600;
    const segundosEnMinuto = 60;
    const minutosEnHora = 60;
    let contadorHoras = 0;
    let contadorMinutos = 0;
    let contadorSegundos = 0;
    
    for (let i = 0; i < horasVideos.length; i++) {
        contadorHoras += Number(horasVideos[i].value);
    }
    
    for (let i = 0; i < minutosVideos.length; i++) {
        contadorMinutos += Number(minutosVideos[i].value);
    }

    for (let i = 0; i < segundosVideos.length; i++) {
        contadorSegundos += Number(segundosVideos[i].value);
    }

    let contadorHorasASegundos = horasASegundos();
    let contadorMinutosASegundos = minutosASegundos();

    function horasASegundos() {
        return contadorHoras * segundosEnHora;
    }
    function minutosASegundos() {
        return contadorMinutos * segundosEnMinuto;
    }
    
    let tiempoFinalEnSegundos = contadorHorasASegundos + contadorMinutosASegundos + contadorSegundos;
    const minutosSobrantes = tiempoFinalEnSegundos / segundosEnMinuto;
    const segundosFinales = Math.floor(tiempoFinalEnSegundos % segundosEnMinuto);
    const horasSobrantes = minutosSobrantes / minutosEnHora;
    const minutosFinales = Math.floor(minutosSobrantes % minutosEnHora);

    const resultado = document.querySelector('#resultado');
    resultado.innerText = `La suma de los videos es: ${Math.floor(horasSobrantes)} Horas, ${minutosFinales} Minutos, ${segundosFinales} Segundos`;
}
