/*07) ​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

function bhaskara(a,b,c){
    let delta;
    let x;
    let bPow;

    bPow = Math.pow(b,2);
    delta = bPow - (4*a*c);
    console.log(delta);


    if(delta < 0){
        console.log('Delta negativo. Não possui raízes reais.');
    }else if(delta === 0){
        x = -b/(2*a);
        console.log(`Delta é igual a zero, ou seja, possui uma única raiz real com o valor de: ${x}`);
    }else if(delta > 0){
        let x1;
        let x2;
        x1 = (-b + Math.sqrt(delta))/(2*a);
        x2 = (-b - Math.sqrt(delta))/(2*a);        
       console.log(`Delta é maior que zero, ou seja, possui duas raízes reais com o valor de: ${x1} e ${x2}`);
    }
}

bhaskara(-1,1,6);