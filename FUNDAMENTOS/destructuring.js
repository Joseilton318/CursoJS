// novo recurso do ES2015

const pessoa = {
    nome: 'Daniele',
    idade: '35',
    filho: 'Levi Arthur',
    esposo: 'Jose ilton', 
    endereco: {
        logradouro: 'Plano Diretor Norte',
        numero: 504    
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade :i } = pessoa
console.log(n , i)

const {sobrenome , bemHumorada = true } = pessoa
console.log(sobrenome , bemHumorada)

const {endereco: { logradouro , numero , cep}} = pessoa
console.log(logradouro , numero , cep)

const { filho , esposo} = pessoa
 console.log(filho , esposo)

 const {filho: f , esposo: e } = pessoa
 console.log(f , e )