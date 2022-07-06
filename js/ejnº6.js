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
