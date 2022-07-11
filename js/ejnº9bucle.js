let frase = prompt("Ingrese una frase de hasta 50 caracteres");
console.log(frase);
console.log(frase.length);
console.log(frase.charAt(0));

let i = 0

// Hola mundo

while(i <= 49){
    if (
        frase.charAt(i) === "a" ||
        frase.charAt(i) === "e" ||
        frase.charAt(i) === "i" ||
        frase.charAt(i) === "o" ||
        frase.charAt(i) === "u"
      ) {
        document.write(frase.charAt(i));
      }
      i = i + 1
}