| [Semana Anterior](/week03/README.md) |
| [Inicio](/README.md) |
[Siguiente semana ](/week05/README.md)|

# JavaScript

<details>
  <summary>Un pequeño Quiz/repazo para reforzar lo visto hasta el momento con JS</summary>
  <ul>  
    <details>
    <summary>¿Qué es un array?</summary>
      Es una estructura de datos de tipo objeto.
    </details>
    <details>
    <summary>¿Qué es una variable?</summary>
      Es la representación de un espacio en memoria.
    </details>
    <details>
    <summary>¿Qué resultado podría esperar de ésta validación? 
    <code>4 == “4”</code>
    </summary>
      TRUE
    </details>
    <details>
    <summary>¿Cuáles son los tipos de scope tenemos? </summary>
    Scope global y Scope local.
    </details>
    <details>
    <summary>¿Qué resultado podría esperar de ésta validación? 
    <code>1 = “1”</code></summary>
    Syntax Error
    </details>
    <details>
    <summary>¿Qué podemos esperar al llamar al método .pop(); ? </summary>
    Borrar el último elemento de mi array.
    </details>
    <details>
    <summary>¿Qué resultado podría esperar de ésta validación? 
    <code>6 === “6”</code></summary>
    FALSE
    </details>
    <details>
    <summary>¿Qué método llamaríamos para saber el index de un elemento de mi array? </summary>
    indexOf()
    </details>
    <details>
    <summary>¿Por qué decimos que JavaScript es un lenguaje dinámico?</summary>
    Porque es un lenguaje que corre en tiempo de ejecución.
    </details>
    <details>
    <summary>¿Cómo podemos crear notas o comentarios en nuestro JavaScript?</summary>
    utilizando //... /*  */
    </details>
    <details>
    <summary>¿Qué significa Coerción en JS?</summary>
    Es el proceso de convertir el valor de un tipo a otro.
    </details>
    <details>
    <summary>¿Qué es el hoisting en Javascript?</summary>
    Es cuando las declaraciones de variables y funciones se procesan antes de ejecutar cualquier código.
    </details>

  </ul>
</details>



# Canvas


- Realizar con Canvas la cabeza de un creper (minecraft)

<details>
  <summary>Solución</summary>

    ```
    <canvas width="600" height="400"></canvas>
    <script>
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    //cabeza
    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(200, 50, 350 ,300);
    //ojos
    pincel.fillStyle = 'black';
    pincel.fillRect(250, 110, 90, 90);
    pincel.fillRect(410, 110, 90, 90);
    //nariz
    pincel.fillRect(340, 200, 70, 100);
     //boca
    pincel.fillRect(300, 240, 40, 110);
    pincel.fillRect(410, 240, 40, 110);
    </script>
    ```

</details>

-  Dibujar una flor con Canvas

<details>
  <summary>Solución</summary>
    
    ```
    <canvas width="600" height="400"></canvas>

    <script>

    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0, 0, 600, 400);

    function dibujarCirculo(x, y, radio, color) {

        pincel.fillStyle = color;
        pincel.beginPath();
        pincel.arc(x, y, radio, 0, 2*3.14);
        pincel.fill();
    }
        function dibujarFlor(x,y) {
        dibujarCirculo(x, y+20, 10, "blue");
        dibujarCirculo(x, y, 10, "red");
        dibujarCirculo(x, y-20, 10, "yellow");
        dibujarCirculo(x-20, y, 10, "orange");
        dibujarCirculo(x+20, y, 10, "black");
        }
        dibujarFlor(300,200);

    </script>
    ```


</details>