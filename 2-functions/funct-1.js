//criar uma função de forma literal

function func1(valA, valB, valC) {
    console.log((valA+valB+valC)/3);
}

func1(5,5,5);

//armazenar uma função em uma variável 

const varX = function(valA, valB, valC){
    console.log((valA+valB+valC)/3) ;
}

varX(5,5,5);

//armazenar uma função em um array

const array = [function(valA,valB){ return valA+valB }, func1, varX];

console.log(array[0](2,3));

//armazenar em um atributo de objeto

const obj = {};

obj.falar = function (){
    return 'Vai Corinthians!';
}

console.log(obj.falar());

//funções podem receber número variável de parâmetros
function soma(){
    let soma = 0;
    for (i in arguments){
        soma += arguments[i];
    }
    return soma;
}

console.log(soma(1,5,6,9,2,3,1));

//função que recebe valores undefined e troca ele por um valor padrão, utilizando o 'or' ||

function soma2(a,b,c){
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c; //estratégia mais segura! 

    return a + b + c;
}

console.log(soma2(1,2));
console.log(soma2(3));
console.log(soma2(0,0,0));

//valor padrão do ECMASript2015 

function soma3(a=1,b=1,c=1){
    return a+b+c;
}

console.log(soma3(0,0,0));