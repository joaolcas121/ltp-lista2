class Operacoes {
  calcular(a: number, b: number, operacao: string): number | string {
    switch (operacao) {
      case "soma": return a + b;
      case "subtrai": return a - b;
      case "multiplica": return a * b;
      case "divide": return b !== 0 ? a / b : "Erro: divisão por zero";
      default: return "Operação inválida";
    }
  }
}

const op = new Operacoes();
console.log(`20 + 5 = ${op.calcular(20, 5, "soma")}`);