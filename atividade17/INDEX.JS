class Investimento {
  constructor(capital, taxa) {
    this.capital = capital;
    this.taxa = taxa;
  }

  calcularJuros(anos) {
    return this.capital * this.taxa * anos;
  }
}

const inv = new Investimento(1000, 0.10);
console.log("Juros em 2 anos:", inv.calcularJuros(2));