/*class Pessoa {
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }

}

const p1 = new Pessoa('Caio');
p1.falar();

//utilizando arrow function pra criar uma pessoa, não precisa utilizar o this.
const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Andressa');
p2.falar();*/

//utilizando factory function para criar um objeto pessoa
function Pessoa(nome){
    this.nome = nome;

    this.falar = function (){
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('Caio');
p1.falar