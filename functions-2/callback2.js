//sem callback
const notas = [7.7,8.6,6.6,9.2,3.6,5.4];

const notasBaixas1 = [];
for (let i in notas){
    if(notas[i]<7){
        notasBaixas1.push(notas[i]);
    }
}

console.log(notasBaixas1);

//com callback
const notasBaixas2 = notas.filter(function (notas){
    return notas < 7;
})

console.log(notasBaixas2)

//com callback + arrow function
const notasBaixas3 = notas.filter(notas => notas < 7)

console.log(notasBaixas3)