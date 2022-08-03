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