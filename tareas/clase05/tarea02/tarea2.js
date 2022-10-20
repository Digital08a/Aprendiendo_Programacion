document.querySelector('#ingresar').onclick = function () {
    const primerNombre = document.querySelector('#nombre-usuario').value;
    const segundoNombre = document.querySelector('#segundo-nombre').value;
    const apellido = document.querySelector('#apellido-usuario').value;
    const edad = Number(document.querySelector('#edad-usuario').value);
    const saludarUsuario = document.querySelector('#bienvenido');
    saludarUsuario.innerText = `Bienvenido, ${primerNombre}`;


    var mostrarDatos = `Hola ${primerNombre} ${segundoNombre}, tu apellido es ${apellido} y tenes ${edad} años `;
    document.getElementById("resultado").innerHTML = mostrarDatos;
}
