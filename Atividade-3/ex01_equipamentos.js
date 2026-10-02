const fs = require('fs');

const equipamentos = [
  {
    codigo: 1,
    nome: 'Torno',
    setor: 'Produção',
    operacional: true
  },
  {
    codigo: 2,
    nome: 'Furadeira',
    setor: 'Manutenção',
    operacional: true
  },
  {
    codigo: 3,
    nome: 'Prensa',
    setor: 'Produção',
    operacional: false
  }
];

const dados = JSON.stringify(equipamentos, null, 2);

fs.writeFileSync('equipamentos.json', dados);

console.log('Os equipamentos foram cadastrados!');
