class Produto {
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }

  aplicarDesconto(percentual: number): number {
    return this.preco - (this.preco * percentual / 100);
  }
}

const p = new Produto("Camisa", 100);
console.log(`Preço com desconto: ${p.aplicarDesconto(20)}`);