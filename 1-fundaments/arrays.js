//declarando o array e printando alguns de seus elementos com base no índice 
const values = [7.7,8.9,6.3,9.2];
console.log(values[0],values[3]);
console.log(values[4]);

//atribuindo um valor a um elemento do array
values[4] = 10;
console.log(values);

//tamanho do array
console.log(values.length);


//adiciona ao fim do array os elementos, separados por vírgula
values.push({id: 3}, false, null, 'teste');
console.log(values);

//excluir o último elemento do array
values.pop();
console.log(values);

//excluir um elemento específico com base em seu índice
delete values[0];
console.log(values);    

//verificar o tipo do array
console.log(typeof values); 