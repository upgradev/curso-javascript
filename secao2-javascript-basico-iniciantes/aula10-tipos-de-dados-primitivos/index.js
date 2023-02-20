const nome = "Luiz";
const nome1 = "Ana";
const nome2 = `Ana`;

const num1 = 10;
const num2 = 10.42;

let nomeAluno; //undefined não inicializou e não não aponta para local nenhum na memoria
const sobrenomeAluno = null; //não aponta para local nenhum na memoria

const aprovado = true; // lógico

console.log(typeof nome, nome);
console.log(typeof aprovado, aprovado);
console.log(typeof num1, num1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);

let a = 2
const b = a;
console.log(a,b);
a = 3
console.log(a, b);
// const a  = [1,2]
// const b  = a

// console.log(a, b);
// b.push(3)
// console.log(a, b);