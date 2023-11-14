//parâmetros de função
//declaração de função: pode ser chamada antes 

console.log(soma(1,2))

function soma(num1, num2){
    return num1 + num2;
}



//expressão de função: não pode ser chamada antes da inicialização da const
//console log aqui irá dar um reference error

const somaNumeros = function(numero1, numero2){
    return numero1 + numero2
}


