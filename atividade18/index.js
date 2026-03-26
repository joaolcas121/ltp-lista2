class Intervalo {
  constructor(inicio, fim) {
    this.inicio = inicio;
    this.fim = fim;
  }

  contem(numero) {
    return numero >= this.inicio && numero <= this.fim;
  }
}

const intervalo = new Intervalo(1, 10);
console.log("5 está no intervalo:", intervalo.contem(5));
console.log("15 está no intervalo:", intervalo.contem(15));