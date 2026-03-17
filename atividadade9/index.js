class ContaBancaria {
  constructor(titular) {
    this.titular = titular
    this.saldo = 0
  }

  depositar(valor) {
    this.saldo += valor
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor
    } else {
      console.log("Saldo insuficiente")
    }
  }
}

const conta = new ContaBancaria("João")

conta.depositar(500)
conta.sacar(200)

console.log("Saldo final:", conta.saldo)