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
        <li> Una palabra clave especial que denota un valor <br>nulo</br>. (Dado que JavaScript distingue entre mayúsculas y minúsculas, <br>null</br> no es lo mismo que <br>Null</br>, <br>NULL</br> o cualquier otra variante). </li>
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
    <code>
        if (condition) 
        {
        statement_1;
        } else 
        {
        statement_2;}
    </code>
    <li> Aquí, la condition puede ser cualquier expresión que se evalúe como <b>true</b> o <b>false</b>. 
    Si `condition` se evalúa como <b>true</b>, se ejecuta <b>statement_1</b>. De lo contrario, se ejecuta <b>statement_2</b>. <b>statement_1</b> y <b>statement_2</b> pueden ser cualquier declaración, incluidas otras declaraciones <b>if</b> anidadas.
    </li>
    <li> También puedes componer las declaraciones usando else if para que se prueben varias condiciones en secuencia, de la siguiente manera: </li>
    <code>
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
       </code>
    <li> En el caso de múltiples condiciones, solo se ejecutará la primera condición lógica que se evalúe como <b>true</b> </li>
    </ul>
</details>
<details><summary><b>Switch</b></summary>
    <ul>
        <li> Una instrucción <b>switch</b> permite que un programa evalúe una expresión e intente hacer coincidir el valor de la expresión con una etiqueta <b>case</b>. Si la encuentra, el programa ejecuta la declaración asociada.
        Una <b>instrucción</b> switch se ve así: </li>
        <code>
        switch (expression) {<br>
            case label_1:<br>
                statements_1<br>
                [break;]<br>
            case label_2:<br>
                statements_2<br>
                [break;]<br>
                …<br>
            default:<br>
                statements_def<br>
                [break;]<br>
            }
        </code>
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
    Las funciones son uno de los bloques de construcción y es similar a un procedimiento 
    Una <b>función</b> es un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.
    <details><summary>Definir funciones</summary>
    </details>
    <ul>
    <li>El nombre de la función.</li>
    <li>Una lista de parámetros de la función, entre paréntesis y separados por comas.</li>
    <li>Las declaraciones de JavaScript que definen la función, encerradas entre llaves, <code>{ ... }</code></li>
    <b>ejemplo</b>
    <javascript>    
        function square(number) {
        return number * number;
        }   
    </javascript>
</details>
<details><summary>Diferencia entre argumentos y parametros</summary></details>
<details><summary>Parametros predeterminados</summary></details>
<details><summary>Matriz de argumentos</summary></details>
