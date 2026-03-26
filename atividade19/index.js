class Texto {
  constructor(conteudo) {
    this.conteudo = conteudo;
  }

  repetir(vezes) {
    return this.conteudo.repeat(vezes);
  }
}

const texto = new Texto("Oi ");
console.log(texto.repetir(3));