// referencia (mutavel) - Arrays, Objetos, funções

const a = {
    nome: "Ana",
    sobrenome: "Maria"
}

// const b = a;
const b  = {...a}; // independente de a

a.nome = "João"
console.log(a, b);


// let a = [1, 2, 3];
// // let b = [...a]; //independente de a
// let b = a;
// console.log(a, b);

// a.push(4)
// console.log(a, b);

// b.pop()
// console.log(a, b);

// primitivos (imutáveis) - string, number, bool, undefined, null
// let a = "A";
// let b = a;
// console.log(a, b);

// a = "Outra coisa"
// console.log(a, b);

// let nome = "Luiz"
// nome[0] = "R"
// console.log(nome[0], nome);
