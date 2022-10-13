# Tarea 1:
Preguntarle al usuario su nombre.
Si el nombre del usuario es el mismo que  el  de ustedes
Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
Elijan otro nombre, puede ser de un pariente, amigo, conocido.
Si el nombe del usuario es el mismo que el que nombre que eligieron
Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
Si no, simplemente imprimir "Hola " + nombre!
```
const miNombre = "Alexis";
const nombreUsuario = prompt("Ingrese su nombre");
const nombrePrimo = "Elias";

if (nombreUsuario.toLowerCase() === miNombre.toLocaleLowerCase()){
    console.log(`Hola, Tocayo! Yo también me llamo ${miNombre}`);
}else if(nombreUsuario.toLocaleLowerCase() === nombrePrimo.toLowerCase()){
    console.log(`Hola ${nombreUsuario} te llamas igual que mi primo`)
}else{
    console.log(`Hola ${nombreUsuario}`);
}
```
# Tarea 2:
Preguntar la edad del usuario
Hacerle saber si tiene más, menos ó la misma edad que nosotros.

```
const edadAdmin = 30;
const edadUsuario = Number(prompt("Ingrese su edad"));

if(edadAdmin === edadUsuario){
    console.log(`Tenemos la misma edad`)
}else if(edadAdmin >edadUsuario){
    console.log(`Tengo más años`)
}else{
    console.log(`tengo menos años`)
}
```

# Tarea 3:
Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
Si dice si, preguntarle la edad.
Si la edad es mayor a 18, dejarlo entrar al bar.
Si la edad es menor a 18, no dejarlo entrar al bar.
Si no tiene documento, no dejarlo entrar al bar.
Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
Punto bonus: SI, NO, Si, No, si, no.

```
const documento = "si";
const edadMinima = 18;
const usuarioConDocumento= prompt("Tiene documento?")
if (usuarioConDocumento.toLocaleLowerCase() === "si"){
    const edadUsuario = Number(prompt("Ingrese su edad"));
    if(edadMinima<=edadUsuario){
        console.log("Puede ingresar al bar")
    }else{
        console.log("No puede ingresar")
    }
}else{
    console.log("No puede ingresar al bar hasta sin documento")
}
```