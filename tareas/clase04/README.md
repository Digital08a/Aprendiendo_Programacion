# TAREA:

Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

```
function tarea1(){
    let CONTADOR=22;
    for(i=3; i<CONTADOR;i+=3){
        console.log(`el número es ${i}`);
    }
}
```

# Tarea 2:

Usando un bucle 'while', decile a tu computadora que registre los números de diez a uno.

```
function tarea2(){
    let NUMERO=10
    while(NUMERO>=1){
        console.log(`número registrado ${NUMERO}`)
        NUMERO= NUMERO-1;
    }
}
```

# Tarea 3:

Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
Cuenta del 1 al 50 e imprime los números:

- Si un número es múltiplo de tres, imprime 'Fizz'.
- Si es un múltiplo de 5, imprime 'Buzz'.
- Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
- Para todo lo demás, imprime el número mismo.
  NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
  Calcula el resto al dividir.
  10% 3 = 1 - en 10 tenemos 3 _ 3 + 1
  16% 4 = 0 - en 16 tenemos 4 _ 4
  19% 4 = 3 - en 19 tenemos 4 \* 4 + 3, etc.

Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
ej.: calcularPromedio([10,5,4,2,8])

```
function tarea3(){
    const NUMERO_MAXIMO=50;
    for(i=1;NUMERO_MAXIMO>=i;i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }else if(i %3 == 0){
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        }else{
            console.log(`el número es ${i}`)
        }
    }
}
```
