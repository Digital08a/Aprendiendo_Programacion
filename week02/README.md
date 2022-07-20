1-En general un lenguaje compilado está optimizado para el momento de la ejecución por más que tenga una carga adicional el programador 
y un lenguaje interpretado esta optimizado para hacer la vida más sencilla al programador aunque la máquina tenga una carga adicional
2-Java es un lenguaje particular porque es compilado, pero es compilado a un lenguaje intermedio llamado bytecode, que después es interpretado. 
Los creadores de Java querían crear un lenguaje compilado, pero que se pudiera ejecutar en cualquier sistema operativo y procesador sin necesidad de crear varios ejecutables.
Es por eso que si quieres ejecutar código Java debes instalar el JRE (Java Runtime Environment), que es el programa que se encarga de interpretar el bytecode al que son compilados los programas de Java.
Si deseas compilar código Java no es suficiente instalar el JRE, necesitas el JDK (Java Development Kit) que incluye el compilador, entre otras herramientas de desarrollo.
Otros lenguajes que están siguiendo este mismo modelo como C#, entre otros.
3-
  Starting point: START
  Input: READ, GET
  Output: PRINT
  Math: *
  Assignation: <--
  Initialize: SET, INIT
  Add one: INCREMENT
  End point: END

  1. START
  2. CantidadUSD <-- GET // USD a convertir
  3. BTCprecio <-- GET //ingresar valor btc
  4. Total <-- CantidadUSD * BTCprecio 
  5. PRINT Total
  9. END
4- Listo