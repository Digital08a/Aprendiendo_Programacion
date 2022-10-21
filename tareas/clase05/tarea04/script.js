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
const botonCalcular = document.querySelector("#calcular");

botonCalcular.onclick = function () {
    const listaDeNumeros = document.querySelectorAll("li");
    var arrayNumeros = [];

    for (let i = 0; i < listaDeNumeros.length; i++) {
        arrayNumeros.push(Number(listaDeNumeros[i].textContent));
    }

    function calcularPromedio() {
        let sumaDeNumeros = 0;
        for (let i = 0; arrayNumeros.length; i++) {
            sumaDeNumeros += arrayNumeros[i];
        }
        let promedio = sumaDeNumeros / arrayNumeros.length;
        console.log(promedio);
        return promedio;
    }

    function obtenerNumeroMenor() {
        let numeroMenor = arrayNumeros[0];
        for (let i = 0; i < arrayNumeros; i++) {
            if (numeroMenor > arrayNumeros[i]) {
                numeroMenor = arrayNumeros[i];
            }
        }
        console.log(numeroMenor);
        return numeroMenor;
    }
    function obtenerNumeroMayor() {
        let numeroMayor = arrayNumeros[0];
        for (let i = 0; i < arrayNumeros; i++) {
            if (numeroMayor < arrayNumeros[i]) {
                numeroMayor = arrayNumeros[i];
            }
        }
        console.log(numeroMayor);
        return numeroMayor;
    }

    function obtenerNumeroRepetido() {
        for (let i = 0; i < arrayNumeros; i++) {
            let auxiliar = arrayNumeros[0];
            if (auxiliar > arrayNumeros[i]) {
                auxiliar = arrayNumeros[i];
            }
        }
        console.log(auxiliar);
        return auxiliar;
    }
    
    function mostrarDatos(){
        document.getElementById("promedio").innerHTML = "El promedio es : " + calcularPromedio();
        document.getElementById("numero-menor").innerHTML = "El número más pequeño es : " + obtenerNumeroMenor();
        document.getElementById("numero-mayor").innerHTML = "El número más grande es : " + obtenerNumeroMayor();
        document.getElementById("mas-frecuente").innerHTML = "El número más frecuente es : "+ obtenerNumeroRepetido();
    }
    mostrarDatos();
    
};
// 
/*
for (let i = 0; i < listaDeNumeros.length; i++) {
    console.log(arrayNumeros[i])
}
*/
