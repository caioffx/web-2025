//01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function opAritmeticas(a,b){
    let sum = a + b;
    let sub = a - b;
    let mult = a * b;
    let divi;
    if (b != 0) {
        divi = a / b; 
    }else{
        divi = "Dividir por zero não é possível"
    }

    console.log(`Os valores são: ${a} e ${b} e os resultados de suas operações aritméticas são: 
        1) Soma: ${sum};
        1) Subtração: ${sub};
        1) Multiplicação: ${mult};
        1) Divisão: ${divi}.`);
}

opAritmeticas(15,2);    