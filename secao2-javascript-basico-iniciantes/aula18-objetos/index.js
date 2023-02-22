const pessoa1 = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,
  fala() {
    // console.log(`${this.nome} ${this.sobrenome} está falando oi!!`);
    console.log(`A minha idade atual é ${this.idade}`);
  },
  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

// function criaPessoa(nome, sobrenome, idade) {
//   return {
//     nome,
//     sobrenome,
//     idade: idade,
//   };
// }

// const pessoa1 = criaPessoa("Luiz", "Miranda", 25);
// const pessoa2 = criaPessoa("Maria", "Oliveira", 32);
// const pessoa3 = criaPessoa("Joao", "Moreira", 55);
// const pessoa4 = criaPessoa("Junior", "Antonio", 40);
// const pessoa5 = criaPessoa("Jean", "Lara", 19);
// console.log(pessoa1.nome, pessoa1.sobrenome);
// console.log(pessoa2.nome);

// const pessoa1 = {
//   nome: "Luiz",
//   sobrenome: "Miranda",
//   idade: 25,
// };
// const pessoa2 = {
//   nome: "Ana",
//   sobrenome: "Luiz",
//   idade: 30,
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

// const nome01 = "Luiz";
// const sobrenome01 = "Miranda";
// const idade01 = 25;

// const nome02 = "Ana";
// const sobrenome02 = "Luiza";
// const idade02 = 30;
