|[Semana Anterior](/week02/README.md) |
|[ Inicio](/README.md) |
[Siguiente semana ](/week04/README.md)|

# Javascript

<details><summary>Scopes </summary></details>

<details><summary>var, let, const </summary></details>

<details><summary>Operators </summary>
<ul> 
    <li> <details><summary>TypeOf</summary></li></details>
</ul>
<details><summary>Data structure</summary>
<ul>
    <li><details><summary>Array </summary></details></li>
    <li><details><summary>List</summary></details></li>
    <li><details><summary>Stack </summary></details></li>
</details>
</ul>
<details><summary>Object </summary></details>
<details><summary>DOM API </summary></details>
<br>


# Ejercicios

Escriba una función que tome un número entero como entrada, y devuelva el número de bits que son iguales a uno en la representación binaria de ese número. Puedes garantizar que la entrada es no negativa.

```
Ejemplo: La representación binaria de `1234` es `10011010010`, por lo que la función debería devolver 5 en este caso
```
<details>
  <summary>Click para ver solución</summary>
  
    let n= 1234;
    var countBits = function(n) {
    return n.toString(2).replace(/0/g,'').length;
    };
    console.log (countBits(n))
</details>


```
usamos n.toString(2) para convertir en binario
replace para reemplazar los ceros
length encuentra la longitud, al ser solo ceros, devuelve el número exacto
```

#
- Su tarea consiste en ordenar una cadena dada. 
Cada palabra de la cadena contendrá un único número. 
Este número es la posición que debe tener la palabra en el resultado.

`Nota`: Los números pueden ser del 1 al 9. 
Así que el 1 será la primera palabra (no el 0).

Si la cadena de entrada está vacía, devolverá una cadena vacía. 
Las palabras de la cadena de entrada sólo contendrán números consecutivos válidos.

<details>
  <summary>Click para ver solución</summary>
  
    let names= ["Alex", "David"]
    function likes(names) {
        switch(names.length) {
    case 0:
        return 'no one likes this';
        break;
    case 1:
        return names[0] +  ' likes this';
        break;
    case 2:
        return names[0] + ' and '+ names[1] + ' like this';
        break;
    case 3:
        return names[0]+', '+ names[1] + ' and ' + names[2] + ' like this';
        break;
    default:
        return names[0]+ ', '+ names[1] + ' and ' + (names.length-2 ) + ' others like this';
        break;
    }
    }
    console.log(likes(names) );
</details>



#
- Su tarea consiste en ordenar una cadena dada. 
Cada palabra de la cadena contendrá un único número. 
Este número es la posición que debe tener la palabra en el resultado.

Nota: Los números pueden ser del 1 al 9. Así que el 1 será la primera palabra (no el 0).

Si la cadena de entrada está vacía, devolverá una cadena vacía. 
Las palabras de la cadena de entrada sólo contendrán números consecutivos válidos.

```
ejemplo
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
```

<details>
  <summary>Click para ver solución</summary>
  
    function order(words){
    // =)
    return words && words.split(' ')
    .map(word => word.match(/\d/) + word)
    .sort()
    .map(word => word.slice(1))
    .join(' ');
    }

</details>


#
- Mueve la primera letra de cada palabra al final de la misma, luego añade "ay" al final de la palabra. Deja los signos de puntuación sin tocar.

<details>
  <summary>Click para ver solución</summary>

    function pigIt(str){
    return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay");
}
}
  
</details>


Utilizamos expreciones [regulares](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions#crear_una_expresión_regular) que son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas

#

- Primer intento de sistema de logeo de 3 intentos 

<details>
  <summary>Solución</summary>

    var inicioDeSesionRegistrado = "Alex";
    var contrasenhaRegistrada = "Alex321";

    var maximoIntentos = 3;
    var intentoActual = 1;

    while(intentoActual <= maximoIntentos){
        var inicioDeSesionIngresado = prompt("Ingrese su usuario");
        var contrasenhaIngresada = prompt("Ingrese su contraseña");

        if(inicioDeSesionRegistrado == inicioDeSesionIngresado && contrasenhaRegistrada == contrasenhaIngresada){
            alert("Bienvenido al sistema " + inicioDeSesionIngresado);
            intentoActual = maximoIntentos; // Lo hice bien, así que paso todos los intentos que falten y salgo del loop. Allá abajo aumentará +1! 
        } else {
            if (intentoActual == 3) {
                alert("Agotaste el número permitido de intentos!");
            } else {
                alert("Inicio de sesión inválido. Favor intente de nuevo");
            }
        }

        intentoActual ++;  
    }
</details>



#
- Escriba una función que devuelva el recuento de caracteres alfabéticos y dígitos numéricos distintos, 
sin distinción de mayúsculas y minúsculas, que aparecen más de una vez en la cadena de entrada. 
Se puede suponer que la cadena de entrada sólo contiene caracteres alfabéticos 
(tanto mayúsculas como minúsculas) y dígitos numéricos

```
Ejemplo
"abcde" -> 0 # ningún caracter se repite más de una vez
"aabbcde" -> 2 # 'a' y 'b'
"aabBcde" -> 2 # La 'a' aparece dos veces y la 'b' dos veces (`b` y `B`)
"indivisibility" -> 1 # La "i" aparece seis veces
"Indivisibilities" -> 2 # La "i" aparece siete veces y la "s" dos veces
"aA11" -> 2 # 'a' y '1'
"ABBA" -> 2 # 'A' y 'B' cada uno aparece dos veces
```


<details>
  <summary>Solución</summary>

    function duplicateCount(text) {
        let textArray = text.toLowerCase().split('').sort();
        let i = 0,
            result = 0,
            lastIndexOfChar = 0;
        while (textArray.length) {
            lastIndexOfChar = textArray.lastIndexOf(textArray[i]);
            if (lastIndexOfChar !== i) {
                i = lastIndexOfChar;
                result++;
            }
            textArray = textArray.slice(++i);
            i = 0;
        }
        return result;
    }

</details>

#

- 