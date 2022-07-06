

// Ejercicio nº1
alert("un mensaje");

// Ejercicio nº2
document.write("Hello World");

// Ejercicio nº3
document.write("<br>" + (3 + 5));

// Ejercicio nº4
prompt("Hola nombreUsuario");

// Ejercicio nº5
let numero1 = parseInt(prompt("Ingrese un numero"))
let numero2 = parseInt(prompt("Ingrese otro numero"))
document.write("<br>El valor de la suma es: " + (numero1 + numero2))

// Ejercicio nº6
let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese otro numero"));
console.log(numero1);
console.log(numero2);

if (numero1 > numero2) {
  document.write(numero1 + " es mayor que " + numero2);
} else if (numero1 < numero2) {
  document.write(numero1 + " es menor que " + numero2);
} else if (numero1 === numero2) {
  document.write("Ambos numeros son iguales");
}

// Ejercicio nº7