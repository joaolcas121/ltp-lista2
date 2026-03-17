export default class Calculadora {
  constructor(numero1, numero2) {
    this.num1 = numero1;
    this.num2 = numero2;
  }

  somar() {
    return this.num1 + this.num2;
  }

  subtrair() {
    return this.num1 - this.num2;
  }

  multiplicar() {
    return this.num1 * this.num2;
  }

  dividir() {
    return this.num1 / this.num2;
  }
}