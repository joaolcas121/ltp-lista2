class Aluno {
  constructor(nome) {
    this.nome = nome;
  }

  calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
  }
}

const aluno = new Aluno("João");
console.log("Média:", aluno.calcularMedia(7, 8, 9));