/*12)​ Faça um algoritmo que calcule o fatorial de um número.*/

const PromptFunction = require('prompt-sync');
const prompt = PromptFunction();

let num = parseInt(prompt('Digite um número para calcular seu fatorial: '));

function fatorial(num){

    let cont = 1;
    for(let i = num; i > 1; i--){
        cont *= i;
    }
    console.log(cont);
}

fatorial(num)
