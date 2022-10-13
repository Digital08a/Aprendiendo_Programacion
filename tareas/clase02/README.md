Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
vamos a decirle a la máquina qué función tiene que correr,
dependiendo del operador artmético (+, -, /, *, etc.)
Si el (IF) operador es '+', vamos a usar la función para sumar.
Si no (ELSE), vamos a usar la función para restar.

- Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
- Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
- Paso 3 - Crear una condición if/else basada en el operador que tenemos.

Si (if) tenemos un operador igual a '+', llamamos (ejecutamos. sumar(1,2)) la función
'sumar' con nuestros números (las variables del paso 2).
Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).

```
function sumar(numero1, numero2){
    return numero1 + numero2
}

function restar(numero1, numero2){
    return numero1 - numero2
}

const numero1 = Number(prompt("Ingrese el primer número "))
const numero2 = Number(prompt("Ingrese el segundo número "))
const operador = prompt("Quiere sumar(+) o restar(-)?")

if (operador === "+"){
    console.log("El resultado es " + sumar(numero1, numero2))
} else {
    console.log("El resultado es " + restar(numero1, numero2))
}
```