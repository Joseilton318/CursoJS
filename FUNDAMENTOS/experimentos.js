let a = 3

globalThis.b =123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.esports)

// criando uma variavelmaluca: sem var e let!
abc = 3 //nao faça isso em casa!!!
console.log(global.abc)

//module.exports = { 456, f: false, g: "teste"}