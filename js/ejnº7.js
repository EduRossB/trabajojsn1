// Ejercicio nº7
let numero1 = parseInt(prompt("Ingresar el primer numero"))
let numero2 = parseInt(prompt("Ingresar el segundo numero"))
let numero3 = parseInt(prompt("Ingresar el tercer numero"))

if(numero1 > numero2 && numero1 >numero3)
{
    document.write("El numero mayor es: " + numero1)
}
else if(numero2 > numero3)
{
    document.write("El numero mayor es: " + numero2)
}
else{
    document.write("El numero mayor es: " + numero3)
}