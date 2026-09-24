const entrada = require('readline-sync');

const temperatura= entrada.questionFloat("Digite  a temperatura: ");

if(temperatura <= 60){
    console.log(`Temperatura atual: ${temperatura}°C esta NORMAL`);
}else if(temperatura <= 80){
    console.log(`temperatura atual: ${temperatura}°C precisa de ATENCAO!`);
}else{
    console.log(`temperatura atual ${temperatura}°C esta CRITICA!!!!!!!`);
}