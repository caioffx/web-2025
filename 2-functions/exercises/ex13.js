/*13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

const PromptFunction = require('prompt-sync');
const prompt = PromptFunction();

let dia = parseInt(prompt('Entre com o dia desejado: '));

function diaSemana (dia){
    switch (dia) {
        case 1:
            console.log('Domingo');   
            break;
        case 2:
            console.log('Segunda');
            break;
        case 3:
            console.log('Terça');
            break;
        case 4:
            console.log('Quarta');
            break;
        case 5:
            console.log('Quinta');
            break;
        case 6:
            console.log('Sexta');
            break;
        case 7:
            console.log('Sábado');
            break;    
        default:
            console.log('Entrada inválida ou dia inexistente.');
            break;
    }
}

diaSemana(dia);