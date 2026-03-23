class numero {
   valor : number;

   constructor(valor : number) {
      this.valor = valor;
   }



  comparar(outroValor: number): string {
    if (this.valor > outroValor) return "maior";
    if (this.valor < outroValor) return "menor";
    return "igual";
  }
}

const num = new numero(10);
console.log(num.comparar(5));
