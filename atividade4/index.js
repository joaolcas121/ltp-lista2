class Retangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return this.base * this.altura;
  }
}

const r = new Retangulo(5, 3);

console.log("Área:", r.calcularArea());