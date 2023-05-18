//console.log('Ola mundo')

//var num1 = 12;
//var num2 = 15;
//var num1 = 'jose'

//console.log(num1)
//console.log(num2)

//const num3 = 5;
//num3 = 2;
//console.log(num3)


//var mensagem = 'ola'
//{
//    var mensagem = 'adeus'
//    console.log(mensagem)
//}

//console.log(mensagem)

//let mensagem = 'ola'
//{
//    let mensagem = 'adeus'
//    console.log(mensagem)
//}

//console.log(mensagem)

//let mensagem = 'outra mensagem'
//console.log(mensagem)
//console.log(typeof(mensagem))

//mensagem = 3.14
//console.log(typeof(mensagem))

//const curso = 'BCC'
//console.log(curso.charAt(2))
//console.log(curso.charCodeAt(3))
//console.log('Curso '.concat(curso).concat('!'))
//console.log(curso.indexOf('B'))
//console.log(2+3)
//console.log(2+'3')
//console.log('2'+'3')

//var nome = 'Nathan'
//var mundo = 'Wolrd'
//const template = `Ola ${nome}!`
//console.log(template)

//let isAtivo = !0
//console.log(isAtivo)
//isAtivo = !!0
//console.log(isAtivo)

//isAtivo = true
//console.log(isAtivo)

//const numeros = [1,2,3,4]
//console.log(numeros[0], numeros[3])
//numeros[4] = 'X'
//console.log(numeros)
//console.log(numeros.length)

const valores = [{nome: 'Jose'}, true, 5, 'Maria', 5.5, null]
console.log(valores)
//console.log(valores[0].nome, valores[0].idade)
valores.pop()//remove o ultimo
console.log(valores)
delete valores[3]
console.log(valores)
console.log(typeof(valores))

const nomes = ['Jose','Maria','Joao']
nomes.map(index => console.log(index))

for(let nome of nomes){
    console.log(nome)
}

for(let nome in nomes){
console.log(nome)
}

let pessoas =[
    {
        id: 1,
        nome: 'jose',
        idade: 20
    }
]
pessoas.map(p => console.log(p))

const maria = {nome:'maria', idade:20, data_nascimento:'12/12/2015'}
const jose = {nome:'jose', idade:21, data_nascimento:'11/12/2012'}
const pedro = {nome:'pedro', idade:22, data_nascimento:'22/12/2010'}

const usuarios = [maria, jose, pedro]

//console.log(usuarios[0].nome, usuarios[0].data_nascimento)

usuarios.map(user => console.log(user.nome, user.idade))

const veiculos = [
    {id: 1, categoria: 'esportivo', nome: 'BMW'},
    {id: 2, categoria: 'esportivo', nome: 'Ferrari'},
    {id: 3, categoria: 'utilitario', nome: 'Pick-up'}

]

const filtrados = veiculos.filter(v => v.categoria === 'esportivo')
.map(r => r.nome)
console.log(filtrados)

const numbers = [1,2,3]

const duplicados = numbers.map(n => n * 2)
console.log(duplicados)






