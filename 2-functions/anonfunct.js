const soma = function(x,y){
    return x+y;
}

const printResult = function(a, b, operation = soma){
    console.log(operation(a,b));
}

printResult(3,4);

printResult(3,4,soma);

printResult(3,4, function(x,y){
    return x-y;
})

printResult(3,4,(x,y) => x*y);

const Pessoa = {
    falar: function(){
        console.log('Opa, bão?')
    }
}

Pessoa.falar();