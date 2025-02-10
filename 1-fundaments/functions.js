//function with no return
function printSum(a,b){
    console.log(a + b);
}

printSum(76,1);
printSum(99);
printSum(0, 1, 2, 3, 4);

//function with return
function sum2N(a, b){
    return a + b;
}

console.log(sum2N(1, 2));

//put a function inside a variable

const printSumVar = function (a, b){
    console.log(a + b);
}

printSumVar(2, 3);