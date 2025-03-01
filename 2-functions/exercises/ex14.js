/*14) ​Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

const PromptFunction = require('prompt-sync');
const prompt = PromptFunction();

let fruta = prompt('Entre com o nome da fruta desejada (trabalhamos com maçãs, kiwis e melancias): ');

function quitanda(fruta){
    switch(fruta){
        case 'maçã':
            console.log('Não vendemos esta fruta aqui');
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis.');
            break;
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo.');
            break;
        default:
            console.log('Erro. Reinicie o programa.');
            break;
    }
}

quitanda(fruta);