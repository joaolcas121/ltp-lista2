
export default class Pessoa {
    constructor(nome, horario) {
        this.nome = nome;
        this.horario = horario;
    }
    saudar() {
        if (this.horario < 12) {
      return `Bom dia, ${this.nome}!`;
    } else if (this.horario < 18) {
      return `Boa tarde, ${this.nome}!`;
    } else {
      return `Boa noite, ${this.nome}!`;
    }
  }
}
    

const pessoa1 = new Pessoa("João", 14);
console.log(pessoa1.saudar());