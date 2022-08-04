|[Inicio](/README.md) |
[Siguiente semana](/week04/README.md)|

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

```javascript
let n= 1234;
var countBits = function(n) {
    return n.toString(2).replace(/0/g,'').length;
};
console.log (countBits(n))

/*
usamos n.toString(2) para convertir en binario
replace para reemplazar los ceros
length encuentra la longitud, al ser solo ceros, devuelve el número exacto
*/
```


- Su tarea consiste en ordenar una cadena dada. 
Cada palabra de la cadena contendrá un único número. 
Este número es la posición que debe tener la palabra en el resultado.

Nota: Los números pueden ser del 1 al 9. 
Así que el 1 será la primera palabra (no el 0).

Si la cadena de entrada está vacía, devolverá una cadena vacía. 
Las palabras de la cadena de entrada sólo contendrán números consecutivos válidos.

```javascript

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
```