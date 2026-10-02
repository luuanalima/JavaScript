const fs = require ('fs')
const dados = fs.readFileSync("equipamentos.json", "utf-8");


const equipamentos = JSON.parse(dados);

console.log (equipamentos)