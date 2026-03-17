class Contador {
valor: number = 0;

incrementar(): void {
this.valor++;
}

mostrar(): void {
console.log(this.valor);
}
}

const contador = new Contador();

contador.incrementar();
contador.incrementar();
contador.incrementar();

contador.mostrar();