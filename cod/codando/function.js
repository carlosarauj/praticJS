/* let carrinho = []

function additem(item){
    carrinho.push(item)
}

function removeitem(item){
    let index = carrinho.indexOf(item)
    if(index !== -1){
        carrinho.splice(index,1)
    }
}

function view(){
    if(carrinho.length === 0){
        console.log('your cart is empty')
    } else {('Itens in your cart:')
    for(let more = 0; more < carrinho.length; more++){
        console.log(`${more + 1} - ${carrinho[more]}`)
    }
}
}

function clearAll(){
    carrinho.length = 0
    console.log('Your cart has been cleened')
}

additem('roupa')

clearAll()

view() */

/* let pessoa = { 
    nome: 'carlos',
    sobrenome: 'araujo',
    idade: 20
}
console.log(pessoa['nome'])
 */

//forma de criar objetos
function pessoa(nome,sobrenome,idade){
    return {nome,sobrenome,idade}
} 

let pessoa1 = pessoa('carlos', 'araújo', 20)

let pessoa2 = pessoa('lucas', 'moura', 22)

console.log(pessoa1.nome)
console.log(pessoa2.idade)