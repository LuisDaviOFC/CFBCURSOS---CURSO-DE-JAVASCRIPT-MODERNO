/*
function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

let itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
*/

/*
function* perguntas(){
    const nome = yield 'Qual é o seu nome?'
    const esporte = yield 'Qual é o seu esporte favorito?'
    return "Seu nome é " + nome + ', meu esporte favorito é ' + esporte
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('LuisDavi').value)
console.log(itp.next('Natação').value)
*/

function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i>5){
            break
        }
    }   
}

const itc = contador()

for(let c of itc){
    console.log(c)
}