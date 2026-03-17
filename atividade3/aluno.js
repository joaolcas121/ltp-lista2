export default class Aluno {
  constructor(nome, curso) {
    this.nome = nome;
    this.curso = curso;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e curso ${this.curso}`);
  }
}