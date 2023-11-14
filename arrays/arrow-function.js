//declaração de função
function apresentar(nome){
    return `meu nome é ${nome}`
}

//arrow function
//1 parametro
const apresentarArrow = nome => `meu nome é ${nome}`

//2 parametros
const soma = (num1, num2) => num1 + num2

//com mais de uma linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10){
        return "somente números de 1 a 9"
    } else {
        return num1+ num2
    }
}
