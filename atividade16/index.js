class Temperatura {
  constructor(celsius) {
    this.celsius = celsius;
  }

  converterParaFahrenheit() {
    return (this.celsius * 9/5) + 32;
  }

  converterParaKelvin() {
    return this.celsius + 273.15;
  }
}

const temp = new Temperatura(25);
console.log(temp.converterParaFahrenheit() + "°F");