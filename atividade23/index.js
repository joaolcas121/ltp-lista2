class Palindromo {
  constructor(palavra) {
    this.palavra = palavra;
  }

  ehPalindromo() {
    const invertida = this.palavra.split("").reverse().join("");
    return this.palavra === invertida;
  }
}

const p = new Palindromo("radar");
console.log(p.ehPalindromo());