const entrada = require('readline-sync');

const qdtPorHora = entrada.questionInt("Digite a quantidade de peca produzida por hora: ");
const horasTurno = entrada.questionInt("Digite as horas trabalhadas por tuno: ");
const ProdTotal = qdtPorHora * horasTurno

console.log("\n === RELATORIO DE PRODUCAO ===");
console.log(`Pecas produzidas por hora: ${qdtPorHora}`);
console.log(`Horas do turno: ${horasTurno}`);
console.log(`Total produzido: ${ProdTotal} pecas`);