const estoque = {
    arroz:{quantidade: 35},
    feijao:{quantidade: 42},
    oleo:{quantidade: 36},
    sardinha:{quantidade: 48},
    macarrao:{quantidade: 65},

};

    const totalEstoque = {
    estoque.quantidade.arroz +
    estoque.quantidade.feijao + 
    estoque.quantidade.oleo +
    estoque.quantidade.sardinha +
    estoque.quantidade.macarrao 
}

function vendaArroz() {
    estoque.arroz.quantidade = estoque.arroz.quantidade - quantidade;
}

function vendaFeijao() {
    estoque.feijao.quantidade = estoque.feijao.quantidade - quantidade;
}

function vendaOleo() {
    estoque.oleo.quantidade = estoque.oleo.quantidade - quantidade;
}

function vendaSardinha() {
    estoque.sardinha.quantidade = estoque.sardinha.quantidade - quantidade;
}
    
function vendaMacarrao() {
    estoque.macarrao.quantidade = estoque.macarrao.quantidade - quantidade

}

vendaArroz(15)
vendaFeijao(16)
vendaOleo(7)
vendaSardinha(8)
vendaMacarrao(19)

console.log(vendaArroz,vendaFeijao, vendaOleo, vendaSardinha, vendaMacarrao)
console.log(totalEstoque)



