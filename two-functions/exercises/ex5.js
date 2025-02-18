/*05) ​Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/

function fixResult(a,b){
    let sum = a + b;
    let sub = a - b;
    let mult = a * b;
    let divi;
    if (b != 0) {
        divi = a / b; 
    }else{
        divi = "Dividir por zero não é possível"
    }

    sum = sum.toFixed(2).toString().replace('.',',');
    sub = sub.toFixed(2).toString().replace('.',',');
    mult = mult.toFixed(2).toString().replace('.',',');
    divi = divi.toFixed(2).toString().replace('.',',');

    console.log(`Os valores são: ${a} e ${b} e os resultados de suas operações aritméticas são: 
        1) Soma: R$${sum};
        1) Subtração: R$${sub};
        1) Multiplicação: R$${mult};
        1) Divisão: R$${divi}.`);
}

fixResult(0.1,0.2);