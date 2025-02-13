const fabricantes = ['Mercedes', 'Audi', 'BMW'];

function imprimir(nome, indice){
    console.log(`${indice+1}. ${nome}`);

}

for (let i = 0; i < fabricantes.length; i++) {
   imprimir(fabricantes[i], i);
}

//posso utilizar forEach tbm pra isso

fabricantes.forEach(imprimir)

