//dinamic colletion of key/values pairs
const user = new Object;
user.login = "caioffx"
user.password = "helloworld.c"
user.email = "caiofreitas@outmail.br"

console.log(user);

delete user.email;
user.email = "novoemail@outlink.ch";

console.log(user);

const newUser = {
    login: "",
    password: "",
    email: "",
    keyword: "",
    userOrigin: {
        country: "",
        state: "",
        city: "",
        userAddress: {
            district: "",
            street: "",
            numb: "",
        }
    }
}

newUser.login = 'cvengenz';
newUser.password = '123456';


console.log(newUser)

//objeto constante, porém é possível modificar tudo o que estiver 'dentro' do objeto, como 'pessoa.nome'
const pessoa = {
    nome: 'João',
}
console.log(pessoa);

pessoa.nome = 'Pedro';

console.log(pessoa);

//object.freeze faz com que além do objeto seja inalterável (por ser constante), todas chaves dentro passam a ser constantes também.
Object.freeze(pessoa);
pessoa.nome = 'Neymar';
console.log(pessoa);

//vale lembrar que o objeto passa a não poder receber nenhuma nova chave dentro dele. Além disso, é impossível deletar qualquer informação.
pessoa.end = 'Rua dos Bobos';
delete pessoa.nome;
console.log(pessoa);