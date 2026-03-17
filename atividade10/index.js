class Mensageiro {
  constructor(remetente) {
    this.remetente = remetente
  }

  enviar(destinatario, mensagem) {
    console.log("De:", this.remetente)
    console.log("Para:", destinatario)
    console.log("Mensagem:", mensagem)
  }
}

const msg = new Mensageiro("Ana")

msg.enviar("João", "Olá, tudo bem?")