import Calculadora from './exercicio.js'

const call = new Calculadora(10, 5);

console.log(`Soma: ${call.somar()}`);
console.log(`Subtração: ${call.subtrair()}`);
console.log(`Multiplicação: ${call.multiplicar()}`);
console.log(`Divisão: ${call.dividir()}`);

