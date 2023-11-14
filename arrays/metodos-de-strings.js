//.length
const palavra = "alura";
console.log(palavra.length) //5

//charAt() - será o caractere sendo acessado 
//Com o método charAt() conseguimos acessar um caractere de uma string.
console.log("alura".charAt(3)) //r

//indexOf - será um valor numérico
const palavraAlura = "Alura"
console.log(palavraAlura.indexOf("a")) //4

const palavraNova = "Divertidamente"
console.log(palavraNova.indexOf("e")) //3

//toUpperCase() e toLowerCase()
const palavraMaiusculaEMinuscula = "alura";
console.log(palavraMaiusculaEMinuscula.toUpperCase()) //ALURA
console.log(palavraMaiusculaEMinuscula.toLowerCase()) //alura

//slice()
//retornará parte de uma string, desde que passemos nos parâmetros o índice de início e de fim
let frase = "Mergulhando em tecnologia."
console.log(frase.slice(0,11)) // Mergulhando = nova string

//replace()
//Com a função replace() temos a possibilidade de substituir parte de uma string por outra. Essa função recebe 
//como parâmetros duas informações: a string que você quer substituir e a string que será colocada no lugar.
let nome = "André";
let comunicacao = " Olá, sr. nomeusurario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
console.log(comunicacao.replace("nomeusurario",nome));


//concat()
//O método concat() é uma opção para concatenar strings sem a utilização do operador de adição (+). 
//Ele concatena duas strings, adicionando a nova string ao fim da anterior.
let novaString = "Programe nas principais linguagens e plataformas. Explore linguagens como ";
console.log(novaString.concat("JavaScript,").concat(" Python,").concat(" e C#."))

//split()
let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
let arrayLinguagens = linguagens.split(";");
console.log(arrayLinguagens)

//a execução do split gerará como resultado um array de strigns com os elementos que foram separados com base no separador desejadp


//trim()
//O trim() remove os espaços em branco no início ou fim de uma string. 
//Se em alguma situação precisarmos fazer uma verificação de que o usuário não digitou o login com espaços, faremos:
let login = "   andre@emailteste.com      ";
let loginSemEspaco = login.trim();
console.log(loginSemEspaco); //andre@emailteste.com

//No JavaScript ainda temos algumas variações desta função como: trimEnd(),trimStart(),trimLeft() e trimRight()







