/*12)​ Faça um algoritmo que calcule o fatorial de um número.*/

const PromptFunction = require('prompt-sync');
const prompt = PromptFunction();

let num = prompt('Digite um número para calcular seu fatorial: ');

function fatorial(num){

    for(let i = num; i >= 1; i--){
        let prox = i-1;
        num = num*prox;
        console.log(num);
    }


}

fatorial(num)