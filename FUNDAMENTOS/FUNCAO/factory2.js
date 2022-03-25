function criarProduto(nome, preço) {
    return {
        nome,
        preço,
        desconto: 0.1
    }
}

console.log(criarProduto('Arroz', 24.90))
console.log(criarProduto('Feijao', 8.99))