class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  aplicarDesconto(percentual) {
    this.preco -= this.preco * (percentual / 100);
  }
}

const produto = new Produto("Produto", 100);
produto.aplicarDesconto(20);
console.log("Preço com desconto:", produto.preco);