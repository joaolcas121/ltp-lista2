class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  idadeEmDias() {
    return this.idade * 365;
  }
}

const pessoa = new Pessoa("Lucas", 20);
console.log(`${pessoa.nome} tem ${pessoa.idadeEmDias()} dias de vida`);