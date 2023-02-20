// let umaString = "Um \"texto\""; //escape
// let umaString = "Um \\texto";
let umaString = "o rato roeu a roupa do rei de roma";

console.log(umaString);
console.log(umaString.toLowerCase());
console.log(umaString.toUpperCase());
console.log(umaString.split("r", 2)); // retirar
console.log(umaString.slice(2, 6)); //parte da frase
console.log(umaString.length);
console.log(umaString.replace(/r/, "#")); //substituir a palavra
console.log(umaString.match(/[a-z]/m)); //achar expressao regular
console.log(umaString.lastIndexOf("m", 3));
console.log(umaString.indexOf("texto"));// qual indice começa a palavra
console.log(umaString.charAt(6)); //posicao
console.log(umaString[-1]); //posicao
console.log(umaString.concat(" em um lindo dia ", "ensolarado")); //concatenar
