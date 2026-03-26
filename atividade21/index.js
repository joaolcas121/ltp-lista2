class Equacao {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  calcularDelta() {
    return (this.b ** 2) - (4 * this.a * this.c);
  }
}

const eq = new Equacao(1, -5, 6);
console.log("Delta:", eq.calcularDelta());