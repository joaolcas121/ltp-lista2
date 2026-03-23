class Usuario {
  nome: string;
  email: string;

  constructor(nome: string, email: string, ) {
    this.nome = nome;
    this.email = email;
  }


validarEmail(): string {
    return this.email.includes("@")  && this.email.includes(".")
    ? "Email válido"
    : "Email inválido";
}
}
const usuario = new Usuario("João", "teste@example.com");
console.log(usuario.validarEmail());   

