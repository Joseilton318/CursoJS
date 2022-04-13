const estoque = {
    arroz: {quantidade: 35},
    feijao: {quantidade: 42},
    oleo: {quantidade: 36},
    sardinha: {quantidade: 48},
    macarrao: {quantidade: 65},

};

    function totalEstoque(quantidade){
        return
    totalEstoque.arroz.quantidade +
    totalEstoque.feijao.quantidade + 
    totalEstoque.oleo.quantidade +
    totalEstoque.sardinha.quantidade +
    totalEstoque.macarrao.quantidade 
    
};

function vendaArroz(quantidade) {
    estoque.arroz.quantidade = estoque.arroz.quantidade - quantidade;
}

function vendaFeijao(quantidade) {
    estoque.feijao.quantidade = estoque.feijao.quantidade - quantidade;
}

function vendaOleo(quantidade) {
    estoque.oleo.quantidade = estoque.oleo.quantidade - quantidade;
}

function vendaSardinha(quantidade) {
    estoque.sardinha.quantidade = estoque.sardinha.quantidade - quantidade;
}
    
function vendaMacarrao(quantidade) {
    estoque.macarrao.quantidade = estoque.macarrao.quantidade - quantidade

}

vendaArroz(15)
vendaFeijao(16)
vendaOleo(7)
vendaSardinha(8)
vendaMacarrao(19)

console.log(estoque.arroz, estoque.feijao, estoque.oleo, estoque.sardinha, estoque.arroz)
console.log('ARROZ',estoque.arroz)
console.log('FEIJAO', estoque.feijao)
console.log('OLEO',estoque.oleo)
console.log('SARDINHA',estoque.sardinha)
console.log('OLEO',estoque.oleo)
console.log(estoque)



