# semana 2

# Code wars
Mi perfil en [Codewars](https://www.codewars.com/users/Digit4l) 

# Javascript
<details>
<summary>Números</summary>
    <ul>
    <li> En expresiones que involucran valores numéricos y de cadena con el operador `+`, JavaScript convierte los valores numéricos en cadenas
    </li>
    <li> Operadores (+,-,/,\*) </li>
    </ul>
</details>
<details>
<summary>Boolean</summary>
    <ul>
        <li> Operadores (!, &&, ||)</li>
        <li> Solo puede tener los valores true o false. </li>
        <li> Estos se pueden combinar en expresiones lógicas mediante los operadores lógicos (Y, O, NO,). Un ejemplo de este tipo de expresiones serían:
        <ul>
            <li> verdadero <b>Y</b> falso → falso </li>
            <li> falso <b>O</b> verdadero → verdadero</li>
            <li> <b>NO</b> verdadero → falso </li>
        </ul>
        </li>
    </ul>
</details>
<details>
<summary>String</summary>
    <ul>
    <li> Una secuencia de caracteres que representan un valor de texto. Por ejemplo: <code>"Hola"</code> </li>
    <li> propiedades (length, charAt, [])</li>
    <li> null </li>
    <ul>
        <li> Una palabra clave especial que denota un valor <b>nulo</b>. (Dado que JavaScript distingue entre mayúsculas y minúsculas, <b>null</b> no es lo mismo que <b>Null</b>, <b>NULL</b> o cualquier otra variante). </li>
    </ul>
    <li> undefined </li>
    <ul>
        <li> Una propiedad de alto nivel cuyo valor no está definido. </li>
    </ul>
    <ul>
</details>
<details>
<summary>Comentarios en Javascript</summary>
    <ul>
    <li> linea comentada <br>
    <code>
        // un comentario de una línea
    </code>
    </li>
    <li> 
    bloque comentado <br>
    <code>
    /* bloque <br>
    comentado*/
    </code>
    </li>
    <ul>
</details>

<details>
<summary>Bucles</summary>
    <ul>
    <li>While</li>
    <li>For</li>
    </ul>
</details>

<details>
<summary>Expresiones Condicionales</summary>
    <ul>
    <li> Una expresión condicional es un conjunto de instrucciones que se ejecutarán si una condición especificada es verdadera. JavaScript admite dos expresiones condicionales: <b>if...else</b> y <b>switch</b> .</li>
<details><summary><b>if... else</b></summary>
    <ul>
    <li> Una declaración <b>if</b> se ve así: </li>
        if (condition) 
        {
        statement_1;
        } else 
        {
        statement_2;}
    <li> Aquí, la condition puede ser cualquier expresión que se evalúe como <b>true</b> o <b>false</b>. 
    Si `condition` se evalúa como <b>true</b>, se ejecuta <b>statement_1</b>. De lo contrario, se ejecuta <b>statement_2</b>. <b>statement_1</b> y <b>statement_2</b> pueden ser cualquier declaración, incluidas otras declaraciones <b>if</b> anidadas.
    </li>
    <li> También puedes componer las declaraciones usando else if para que se prueben varias condiciones en secuencia, de la siguiente manera: </li>
        if (condition_1) 
        {<br>
        statement_1; <br>
        } else if (condition_2) { <br>
        statement_2;} <br>
        else if (condition_n) {<br>
        statement_n;<br>
        } else {<br>
        statement_last;<br>
        }
    <li> En el caso de múltiples condiciones, solo se ejecutará la primera condición lógica que se evalúe como <b>true</b> </li>
    </ul>
</details>
<details><summary><b>Switch</b></summary>
    <ul>
        <li> Una instrucción <b>switch</b> permite que un programa evalúe una expresión e intente hacer coincidir el valor de la expresión con una etiqueta <b>case</b>. Si la encuentra, el programa ejecuta la declaración asociada.
        Una <b>instrucción</b> switch se ve así: </li>
        switch (expression) {
            case label_1:
                statements_1
                [break;]
            case label_2:
                statements_2
                [break;]
                …
            default:
                statements_def
                [break;]
            }
        <li> JavaScript evalúa la instrucción <b>switch</b> anterior de la siguiente manera:</li>
        <ul>
            <li> El programa primero busca una cláusula case con una etiqueta que coincida con el valor de expresión y luego transfiere el control a esa cláusula, ejecutando las declaraciones asociadas.</li>
            <li> Si no se encuentra una etiqueta coincidente, el programa busca la cláusula opcional `default`:</li>
            <ul>
                <li> Si se encuentra una cláusula `default`, el programa transfiere el control a esa cláusula, ejecutando las declaraciones asociadas.</li>
                <li> Si no se encuentra una cláusula `default`, el programa reanuda la ejecución en la declaración que sigue al final de `switch`.</li>
                <li> (Por convención, la cláusula `default` está escrita como la última cláusula, pero no es necesario que sea así).</li>
            </ul>
        </ul>
        <li>Declaraciones <b>break</b>
        <ul>
            <li>La declaración opcional break asociada con cada cláusula <b>case</b> asegura que el programa salga de <b>switch</b> una vez que se ejecuta la instrucción coincidente, y luego continúa la ejecución en la declaración que sigue a <b>switch</b>. Si se omite <b>>break</b>, el programa continúa la ejecución dentro de la instrucción <b>switch</b> (y evaluará el siguiente <b>case</b>, y así sucesivamente).</li>
        </ul>
</ul>
</details>
    </ul>
</details>
<details><summary>Funciones</summary>
<ul>
    <li>Las funciones son uno de los bloques de construcción y es similar a un procedimiento. </li>
    <li>Una <b>función</b> es un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.</li>
    <details><summary>Definir funciones</summary>
    <ul>
    <li>El nombre de la función.</li>
    <li>Una lista de parámetros de la función, entre paréntesis y separados por comas.</li>
    <li>Las declaraciones de JavaScript que definen la función, encerradas entre llaves, <code>{ ... }</code></li>
    <b>ejemplo</b>    
        function square(number) {
        return number * number;
        }
    <li>La función <code>square</code> toma un parámetro, llamado <code>number</code>. La función consta de una declaración que dice devuelva el parámetro de la función (es decir, <code>number</code>) multiplicado por sí mismo. La instrucción <code>return</code> especifica el valor devuelto por la función:<br>
    <code>return number * number; </code></li>
    </ul>
</ul>
<ul>
    <details><summary>Expresion <b>function</b></summary>
    <ul>
        <li>Si bien la declaración de función anterior sintácticamente es una declaración, las funciones también se pueden crear mediante una expresión function.</li>
        <li>Esta función puede ser anónima; no tiene por qué tener un nombre. Por ejemplo, la función square se podría haber definido como:</li>
        <li><code>
        const square = function(number) { return number * number }
        var x = square(4) // x obtiene el valor 16
        </code></li>
    </ul>
</details>
    <details><summary>Llamar <b>function</b></summary>
    <ul>
    <li><b>Definir</b> una función no la ejecuta. Definirla simplemente nombra la función y especifica qué hacer cuando se llama a la función.</li>
    <li><b>Llamar</b> a la función en realidad lleva a cabo las acciones especificadas con los parámetros indicados. Por ejemplo, si defines la función <code>square</code>, podrías llamarla de la siguiente manera:</li>
    <li><code>square(5);</code></li>
    <li>La declaración anterior llama a la función con un argumento de <code>5</code>. La función ejecuta sus declaraciones y devuelve el valor <code>25</code>.
    Las funciones deben estar dentro del ámbito cuando se llaman, pero la declaración de la función se puede elevar (cuando aparece debajo de la llamada en el código), como en este ejemplo: </li>
    <li><code>console.log(square(5));    
    /* ... */
    function square(n) { return n * n }
    </code></li>
    <li>El ámbito de una función es la función en la que se declara (o el programa completo, si se declara en el nivel superior).</li>
    </ul>
</details>
    <details><summary>Ámbito de <b>function</b></summary>
    <ul>
    <li>No se puede acceder a las variables definidas dentro de una función desde cualquier lugar fuera de la función, porque la variable se define solo en el ámbito de la función. Sin embargo, una función puede acceder a todas las variables y funciones definidas dentro del ámbito en el que está definida.</li>
    <li>En otras palabras, una función definida en el ámbito global puede acceder a todas las variables definidas en el ámbito global. Una función definida dentro de otra función también puede acceder a todas las variables definidas en su función principal y a cualquier otra variable a la que tenga acceso la función principal.</li>
    </ul>
</ul>
</details>
<details><summary>Diferencia entre argumentos y parametros</summary></details>
<details><summary>Parametros predeterminados</summary></details>
<details><summary>Matriz de argumentos</summary></details>

# Ejercicios
- multiplicación de dos números

- ```javascript
    function multiply(a, b){
    return a * b
    }
    ```    
- se dara un String y tendrá que devolver la suma de todos los caracteres como un int
la funcion debera poder manejar todos los caracteres ASCII

```javascript

    let saludo = "Mary Had A Little Lamb";
    let longitud = saludo.length;
    console.log(longitud)
    let suma=0;
    for (let i = 0; i < longitud; i++) {
        suma= saludo.charCodeAt(i)+suma;
    }
    console.log(suma);
    console.log(longitud)

``` 
- Escribir una funcón que tome un número y devuelva un caracter ASCCI

```javascript
let numero = 65 

    console.log( String.fromCharCode(numero))
```

- implementa una función que sume 2 numeros juntos y devuelva la suma en binario

```javascript
let a = 5
let b = 9
console.log ((a + b).toString(2)); 
```
- Crear una función que calcule la nota final de un estudiante dependiendo de 2 parametros: 
la nota del examen y el número de proyecto realizados

está función debe tomar 2 argumentos: 
examen- nota del examen (de 0-100)
proyectos- número de proyectos completados (0 en adelante)

está función debe devolver un número (califición final).
hay 4 tipos de calificaciones

100, si la nota del examen es superior a 90 o 
si el número de proyectos realizados es superior a 10.

90, si la nota del examen es superior a 75 
y si el número de proyectos realizados es como mínimo de 5.

75, si la nota del examen es superior a 50 y 
si el número de proyectos realizados es como mínimo de 2.
0, en los demás casos

```javascript

let examen= 55;
let proyecto=5;
notaFinal()
console.log ("la nota final es "+notaFinal(examen, proyecto))


function notaFinal (examen, proyecto) {
    let resultado = 0;
    if(examen >90 || proyecto >10){
        resultado=100;
    }else
    if(examen >75  && proyecto>=5){
        resultado=90
    }else{
        if(examen >50 && proyecto >=2){
            resultado=75
        }
    }
    return resultado
    }
```