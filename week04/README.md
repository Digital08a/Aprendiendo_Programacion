| [Semana Anterior](/week03/README.md) |
| [Inicio](/README.md) |
[Siguiente semana ](/week05/README.md)|


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