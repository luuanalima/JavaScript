const entrada = require('readline-sync');

const nome = entrada.question("Digite o nome do material: ");
const qtdAdquirida = entrada.questionInt("Digite a quantidade adquirida: ");
const precoUnit = entrada.questionFloat("Digite o preco de cada unidade: ");
const totalCompra = qtdAdquirida * precoUnit

console.log("=== RELATORIO FINAL DA COMPRA ===");
console.log(`Nome do material: ${nome}`);
console.log(`Quantidade adquirida: ${qtdAdquirida}`);
console.log(`Preco do produto: ${precoUnit}`);
console.log(`Total a pagar da compra: ${totalCompra.toFixed(2)}`);