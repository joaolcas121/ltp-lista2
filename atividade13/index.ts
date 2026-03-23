class Tabuada {
  numero: number;

  constructor(numero: number) {
    this.numero = numero;
  }

  mostrarTabuada(): void {
    for (let i = 1; i <= 10; i++) {
      console.log(`${this.numero} x ${i} = ${this.numero * i}`);
    }
  }
}

new Tabuada(7).mostrarTabuada();