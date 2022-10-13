# Tarea 01
- Crear una funcion que tome como parametro el año actual y el año de nacimiento y calcular edad

Preguntar:
- Salario anual
- Salario mensual


```
function calcularEdad(anioActual, anioNacimiento){
        return anioActual-anioNacimiento;
}

function calcularSalarioAnual(salarioMensual){
    const mesEnUnAnio =12;
    return salarioMensual*mesEnUnAnio;
}

function calcularSalarioMensual(salarioAnual){
    const mesEnUnAnio =12;
    return salarioAnual/mesEnUnAnio;
}
function calcularSalarioSemanal(salarioAnual){
    const semanasAlAnio = 52;
    return (salarioAnual/semanasAlAnio);
}

function calcularSalarioDiario(salarioAnual){
    const diasXAnio =365;
    return salarioAnual/diasXAnio ;
}


const anioActual= Number(prompt("indique el año actual"));
const anioNacimiento= Number(prompt("indique su fecha de nacimiento"));
const edadUsuario= calcularEdad(anioActual,anioNacimiento);
console.log("su edad es "+edadUsuario);

const salarioMensual = Number(prompt("ingrese su salario mensual"));
const salarioAnual = Number(prompt("ingrese su salario anual"));
console.log("su salario anual es $"+calcularSalarioAnual);
console.log("Su salario mensual es $"+calcularSalarioMensual(salarioAnual));
console.log("su salario semanal es $"+calcularSalarioSemanal(salarioAnual));
console.log("su salario diario es $"+ calcularSalarioDiario(salarioAnual));
```