const nome = "Ana";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const altura = 1.8;
let imc; //peso /(altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2023 - idade;
console.log(anoNascimento);
console.log(imc);

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "KG");
console.log("tem", altura, "de altura e seu imc é de", imc);
console.log(`tem ${altura} de altura e seu imc é de ${imc}`);
