isAtive = true;

//true
console.log(isAtive);

//false (!)
console.log(!isAtive);

//1 = true -> !! = true/false/true
isAtive = 1;
console.log(!!isAtive);

//os outros "verdadeiros"
console.log('Os de "verdade": ');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

//o falso
console.log('os falsos: ')
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);

//comum de ocorrer:
let nome = '';

console.log(nome || 'Desconhecido')