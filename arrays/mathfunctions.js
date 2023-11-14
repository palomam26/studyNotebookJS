//arredondamento para o número inteiro mais próximo
const round = Math.round(6.58)
console.log(round)

//arredondamento para o valor mais alto -> contrário do math.floor
 const roundCeil = Math.ceil(5.2)
 console.log(roundCeil)

//arredondamento para o valor mais baixo -> contrário do math.ceil
const roundFloor = Math.floor(5.8)
console.log(roundFloor)

//desconsidera os números decimais 
const roundTrunc = Math.trunc(4.8)
console.log(roundTrunc)

//retorna o valor menor entre os argumentos
const valorMenor = Math.min(0, 150, 30, 20, -8, -200)
console.log(valorMenor)

//retorna o valor maior entre os argumentos
const valorMaior = Math.max(0, 150, 30, 20, -8, -200)
console.log(valorMaior)

//retorna um valor randômico entre 0 e 1 
const randomValue = Math.random()
console.log(Math.random())


//MENOS USADOS

//faz a exponenciação de dois números, como ao quadrado ou ao cubo
const exponenciaçao = Math.pow(4, 2)
console.log(exponenciaçao)

//retorna a raíz quadrada de um número
const raizQuadrada = Math.sqrt(64)
console.log(raizQuadrada)