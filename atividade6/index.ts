class Produto {
nome: string;
preco: number;

constructor (nome: string, preco: number) {
this.nome = nome;
this.preco = preco;
}
estaCaro(): boolean {
return this.preco > 100;
}
}

const produto = new Produto("celular",50);

console.log(produto.estaCaro());