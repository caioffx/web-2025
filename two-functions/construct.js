function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0;

    //método público utilizando o this.
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual+=delta;
        }else{
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //método público
    this.getVelocidadeAtual  = function(){
        return velocidadeAtual;
    }
}

const uno = new Carro();

for(let i = 0; i <= 100 ; i++){
    uno.acelerar();
    console.log(uno.getVelocidadeAtual());
}

