//console.log("Hello World!")

//trabalhando com variáveis
/*var nome = 'Laura'
var sobrenome = Perera'
console.log('Meu nome completo é: '+nome+' '+sobrenome)
console.log(`Meu nome completo é: ${nome} ${sobrenome}`)*/

//trabalhando com funcoes
//declaracao funcao
function abs(x){
    if(x>=0){
        return x
    }else{
        return -x
    }
}

//declaracao variavel
var numero = -4

//chama funcao e manda a var como parametro
var result = abs(numero)

console.log(`O valor absoluto de ${numero} é: ${result}`)

/*const SomaFunc = require('./funcaoSomar') //./funcaoSomar no mesmo diretorio

var numero1 = 10
var numero2 = 20

console.log('O valor da soma é '+(SomaFunc(numero1, numero2)))*/