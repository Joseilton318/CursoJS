// par nome/valor
const saudacao = 'Opa'  //contexto lexico 1

function exec() {
    const saudacao = ' Fala meu Garoto' // contexto lexico 2
    return saudacao
}

// Objetis sao grupos aninhados de partes nome /valor
const cliente = {
    nome : 'Levi Arthur',
    idade :  5 ,
    endereco : {
        logadouro: 'muito legal',
    },
    filiacao: {
        pai: 'Jose ilton melo dos santos',
        mae: 'Daniele Carvalho soares'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)    