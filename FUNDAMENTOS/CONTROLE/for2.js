const notas = [7.7, 6.4, 8.9, 9.2, 7.3]

for (i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Daniele',
    sobrenome: 'Carvalho Soares',
    filho: 'Levi Arthur',
    idade: 35, 
    peso: 65
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}