/*08) ​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)*/ 

const PromptFunction = require('prompt-sync');
const prompt = PromptFunction();

//criar loop para verificar se quer adicionar nova pontuação ou listar todas pontuações e selecionar quais as vezes que ele bateu recorde e verificar qual o menor valor e retornar a posição do array de menor valor.

//função que receberá pontos 

let qntPartidas = prompt(`Entre com o número de partidas realizadas: `)

 let pontos = [];
    for(let i = 0; i < qntPartidas; i++){
        pontos[i] = prompt(`Digite a pontuação da partida número ${i+1}: `);
    }

//irá comparar a última inclusão/último valor do array e se for maior, adiciona 1 no contador de recorde. também verificará em qual posição do array o menor valor se encontra e devolver pro usuário

let cont = 0;

for(let j = 0; j < qntPartidas; j++){
    if(pontos[j] < pontos[j+1]){
        cont++;
    }else if()
}



