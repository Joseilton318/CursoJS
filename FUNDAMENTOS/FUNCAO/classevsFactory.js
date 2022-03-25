class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

      falar () {
          console.log(`Meu nome é ${this.nome}`) 
      }
} 

const p1 = new Pessoa('Daniele')
p1.falar()

const criarPessoa = nome => {
    return {
        falar:() => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Levi Arthur')
p2.falar()