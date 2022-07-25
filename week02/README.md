# semana 2

# Code wars
Mi perfil en [Codewars](https://www.codewars.com/users/Digit4l) donde podrán ver mi progreso

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
    - Una secuencia de caracteres que representan un valor de texto. Por ejemplo: "Hola"
    - propiedades (length, charAt, [])
    - null
        - Una palabra clave especial que denota un valor `nulo`. (Dado que JavaScript distingue entre mayúsculas y minúsculas, `null` no es lo mismo que `Null`, `NULL` o cualquier otra variante).
    - undefined
        - Una propiedad de alto nivel cuyo valor no está definido.
</details>
<details>
<summary>Comentarios en Javascript</summary>
    - linea comentada
        
        ```javascript
        // un comentario de una línea
        ```
    - bloque comentado
         ```javascript
        /* bloque 
        comentado*/
        ```
</details>
- consola
- Bucles
    - While
    - For
<details>
<summary>Expresiones Condicionales</summary>
    - Una expresión condicional es un conjunto de instrucciones que se ejecutarán si una condición especificada es verdadera. JavaScript admite dos expresiones condicionales: `if...else` y `switch`.
    - Una declaración if se ve así:
        ```javascript
        if (condition) 
        {
        statement_1;
        } else 
        {
        statement_2;
        }
        ```
    - Aquí, la condition puede ser cualquier expresión que se evalúe como `true` o `false`. 
    Si `condition` se evalúa como `true`, se ejecuta `statement_1`. De lo contrario, se ejecuta `statement_2`. `statement_1` y `statement_2` pueden ser cualquier declaración, incluidas otras declaraciones `if` anidadas.
    - También puedes componer las declaraciones usando else if para que se prueben varias condiciones en secuencia, de la siguiente manera:
    - ```javascript
        if (condition_1) 
        {
        statement_1;
        } else if (condition_2) {
        statement_2;} 
        else if (condition_n) {
        statement_n;
        } else {
        statement_last;
        }
        ```
    - En el caso de múltiples condiciones, solo se ejecutará la primera condición lógica que se evalúe como `true`
    - Switch
        - Una instrucción `switch` permite que un programa evalúe una expresión e intente hacer coincidir el valor de la expresión con una etiqueta `case`. Si la encuentra, el programa ejecuta la declaración asociada.
        Una `instrucción` switch se ve así:
        ```javascript
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
        ```
        - JavaScript evalúa la instrucción `switch` anterior de la siguiente manera:

            - El programa primero busca una cláusula case con una etiqueta que coincida con el valor de expresión y luego transfiere el control a esa cláusula, ejecutando las declaraciones asociadas.
            - Si no se encuentra una etiqueta coincidente, el programa busca la cláusula opcional `default`:
                - Si se encuentra una cláusula `default`, el programa transfiere el control a esa cláusula, ejecutando las declaraciones asociadas.
                - Si no se encuentra una cláusula `default`, el programa reanuda la ejecución en la declaración que sigue al final de `switch`.
                - (Por convención, la cláusula `default` está escrita como la última cláusula, pero no es necesario que sea así).
        - `Declaraciones break`

            La declaración opcional break asociada con cada cláusula `case` asegura que el programa salga de `switch` una vez que se ejecuta la instrucción coincidente, y luego continúa la ejecución en la declaración que sigue a `switch`. Si se omite `break`, el programa continúa la ejecución dentro de la instrucción `switch` (y evaluará el siguiente `case`, y así sucesivamente).
</details>

- Funciones
- Diferencia entre argumentos y parametros
- Parametros predeterminados
- Matriz de argumentos

#