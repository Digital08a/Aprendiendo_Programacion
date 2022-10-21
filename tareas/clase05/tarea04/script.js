/*
# TAREA: En otro archivo distinto,
Crear una lista de `<ol>` y `<li>` que contengan sólo números.
Convertir esos números a un array y:

1.  Calcular el promedio y mostrarlo en un `<em>`
pre-creado con el texto "El promedio es..."
2.  Obtener el número más pequeño y mostrarlo en un `<em>` 
pre-creado con el texto "El número más pequeño es..."
3.  Obtener el número más grande y mostrarlo en un `<em>` 
pre-creado con el texto "El número más grande es..."
4.  Obtener el número que más se repite y mostrarlo en un `<em>` 
pre-creado con el texto "El número más frecuente es..."

    const promedio = document.querySelectorAll("#promedio");
    const numeroMenor = document.querySelectorAll("#numero-menor");
    const numeroMayor = document.querySelectorAll("#numero-mayor");
    const masFrecuente = document.querySelectorAll("#mas-frecuente");
*/

function sumaTotal() {
    const listaDeNumeros = document.querySelectorAll("li");
    var arrayNumeros = [];

    for (let i = 0; i < listaDeNumeros.length; i++) {
        arrayNumeros.push(Number(listaDeNumeros[i].textContent));
    }
    function obtenerNumeroMenor() {
        let numeroMenor = arrayNumeros[0];
        for (let i = 0; i < arrayNumeros.length; i++) {
            if (numeroMenor > arrayNumeros[i]) {
                numeroMenor = arrayNumeros[i];
            }
        }
        return numeroMenor;
    }
    function obtenerNumeroMayor() {
        let numeroMayor = arrayNumeros[0];
        for (let i = 0; i < arrayNumeros.length; i++) {
            if (numeroMayor < arrayNumeros[i]) {
                numeroMayor = arrayNumeros[i];
            }
        }
        return numeroMayor;
    }
    function obtenerNumeroRepetido() {
        let auxiliar = arrayNumeros[0];
        for (let i = 0; i < arrayNumeros.length; i++) {
            if (auxiliar > arrayNumeros[i]) {
                auxiliar = arrayNumeros[i];
            }
        }
        return auxiliar;
    }

    function calcularPromedio() {
        let sumaDeNumeros = 0;
        for (let i = 0; i < arrayNumeros.length; i++) {
            sumaDeNumeros += arrayNumeros[i];
        }
        let promedio = sumaDeNumeros / arrayNumeros.length;
        return promedio;
    }
    function mostrarDatos() {
        document.getElementById("promedio").innerHTML = "El promedio es : " + calcularPromedio();
        document.getElementById("numero-menor").innerHTML = "El número más pequeño es : " + obtenerNumeroMenor();
        document.getElementById("numero-mayor").innerHTML = "El número más grande es : " + obtenerNumeroMayor();
        document.getElementById("mas-frecuente").innerHTML = "El número más frecuente es : " + obtenerNumeroRepetido();
    }
    mostrarDatos();
}

