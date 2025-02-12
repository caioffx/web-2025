function getIntRandomBet(min, max){
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}


let op = 0;
let cont = 0;

while(op != -1){
    op = getIntRandomBet(-1,100);
    console.log('op choose: ' + op);
    cont++;
}

console.log(cont + 'vezes. ' + 'Até a próxima!');