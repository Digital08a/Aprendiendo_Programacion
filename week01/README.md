|[Inicio](./README.md) |
[Siguiente semana](/week02/README.md)|


# Lenguajes interpretacions y compilados
En general un lenguaje `compilado` está optimizado para el momento de la ejecución por más que tenga una carga adicional el programador 
y un lenguaje `interpretado` esta optimizado para hacer la vida más sencilla al programador aunque la máquina tenga una carga adicional
# Java esta compilando, interpretando o ambos?
Java es un lenguaje particular porque es compilado, pero es compilado a un lenguaje intermedio llamado bytecode, que después es interpretado. 
Los creadores de Java querían crear un lenguaje compilado, pero que se pudiera ejecutar en cualquier sistema operativo y procesador sin necesidad de crear varios ejecutables.
Es por eso que si quieres ejecutar código Java debes instalar el JRE (Java Runtime Environment), que es el programa que se encarga de interpretar el bytecode al que son compilados los programas de Java.
Si deseas compilar código Java no es suficiente instalar el JRE, necesitas el JDK (Java Development Kit) que incluye el compilador, entre otras herramientas de desarrollo.
Otros lenguajes que están siguiendo este mismo modelo como C#, entre otros.

# Pseudocodigo convertir USD a BTC
Instruicciones usadas
```
Starting point: START
 Input: READ, GET
 Output: PRINT
 Math: *
 Assignation: <--
 Initialize: SET, INIT
 Add one: INCREMENT
 End point: END
```
Algoritmo
```
  1. START
  2. CantidadUSD <-- GET // USD a convertir
  3. BTCprecio <-- GET //ingresar valor btc
  4. Total <-- CantidadUSD * BTCprecio 
  5. PRINT Total
  9. END
```
# Convertir Numero a binario
Convertir de decimal a binario supone redefinir el número que quieres convertir. Lo que queremos es diseccionar nuestro número decimal en la suma de potencias de 2.

Ejemplo: 

Veamos el 7, y pensemos en potencias de 2. ¿Qué potencia de 2 es la más cercana al número 7, siendo igual o menor que 7?

2² nos da 4, así que vamos a usar 4 para empezar a descomponer 7. Tenemos que sumarle 3 para llegar a 7.  Con lo cual, podemos considerar que 7=4+3.

Ahora nos queda 3, pero no hay potencias de 2 que nos den 3.Tenemos que descomponer 3 de la misma forma que hicimos con 7.Es decir, encontrar la suma de potencias de 2 que nos dará como resultado 3.Recuerda, tenemos que empezar con potencias de 2 iguales o menores que 3.  2¹ nos da 2, y 2<sup>0</sup> nos da 1.

Hemos usado tres potencias de 2 diferentes en este ejemplo.  Con lo cual, la representación binaria de 7 será de tres dígitos de largo.  Como la potencia de 2 más alta que necesitamos es 2², vamos a empezar contando cuántas veces hemos usado 2².  En binario, solo puede haber dos respuestas a esta pregunta: se ha usado una o cero veces. Si la hemos usado, lo indicamos con un 1.  Si no, lo indicamos con un 0.

Haber usado 2² significa que escribimos un 1.  Ahora continuamos hacia abajo, contando el resto de potencias de 2 que hemos usado.  Hemos usado 2¹, así que lo indicamos con otro 1. Hemos usado 2<sup>0</sup>, así que usaremos 1 para el último espacio.

En este caso trabajamos con el número `1992`
- 2<sup>0</sup> = 1
- 2<sup>1</sup> = 2
- 2<sup>2</sup> = 4
- 2<sup>3</sup> = 8
- 2<sup>4</sup> = 16
- 2<sup>5</sup> = 32
- 2<sup>6</sup> = 64
- 2<sup>7</sup> = 128
- 2<sup>8</sup> = 256
- 2<sup>9</sup> = 512
- 2<sup>10</sup> = 1024
- 2<sup>11</sup> = 2048



|2<sup>10</sup> |2<sup>9</sup> |2<sup>8</sup> |2<sup>7</sup> |2<sup>6</sup> |2<sup>5</sup> |2<sup>4</sup> |2<sup>3</sup>| 2<sup>2</sup> |2<sup>1</sup> |2<sup>0</sup> |
|-|-|-|-|-|-|-|-|-|-|-|
|1|1|1|1|1|0|0|1|0|0|0


`Decimal`: 1992
`Binary`: 11111001000

# MIPS code from Mars 4.5


- Crear un programa que sume dos números proporcionados por el usuario

```
#inicio del segmento de datos, se colocan los mensajes para el usuario en etiquetas
.data 
	ingreseNumero:.asciiz "Ingrese un número para sumar\n"
	ingreseOtroNumero: .asciiz "Ingrese otro número\n"
	resultado: .asciiz "El resultado es= "
	fin: .asciiz "\n programa finalizado"

.text 
#pedir que ingrese el primer numero
li $v0, 4
la $a0, ingreseNumero
syscall
#se carga en sistema el número
li $v0,5
syscall
#se mueve el resultado a otro registro
move $t0, $v0
#pedir que ingrese el segundo numero
li $v0, 4
la $a0, ingreseOtroNumero
syscall
#se carga en sistema el número
li $v0,5
syscall
#se mueve 
move $t1, $v0

#se suman y se almacenan en registro $t2
add $t2, $t0, $t1

#se muestra el mensaje de resultado
li $v0, 4
la $a0, resultado
syscall

#se muestra el resultado
li $v0,1
move $a0, $t2
syscall
#fin de programa
li $v0, 4
la $a0, fin
syscall

#se termina el programa
li $v0,10
syscall



```





- Crear un programa que muestre su nombre

```
.data
        nombre: .asciiz "\n Alexis \n"
.text
        main:
              li $v0, 4
              la $a0, nombre
              syscall
```