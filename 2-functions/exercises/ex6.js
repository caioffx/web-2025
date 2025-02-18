/*06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

//juros simples
function simples(capIni, taxaJuro, tempo){
    let juros = capIni*taxaJuro*tempo;
    let montante = juros + capIni;
    console.log('O valor em juros simples é de ' + montante)
}


//juros compostos
function compostos(capIni, taxaJuro, tempo){
    taxaJuro = 1+taxaJuro;
    let juros = (capIni)*(Math.pow(taxaJuro, tempo));
    let montante = juros + capIni;
    console.log('O valor em juros compostos é de ' + montante)
}

simples(151,0.02,12);
compostos(151,0.02,12);