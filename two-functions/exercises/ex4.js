//04) ​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function resultResto(a,b){
    let result = a/b;
    let resto = a%b;
    console.log(`Resultado: ${result}`);
    console.log(`Resto: ${resto}`);
}

resultResto(15,3);
resultResto(15,2);
resultResto(15,4);
resultResto(15,5);


