const x = 'global';

function fora(){
    const x = 'local';
    function dentro(){
        return x;
    }
    return dentro;

}

const minhafuncao = fora();
console.log(minhafuncao())