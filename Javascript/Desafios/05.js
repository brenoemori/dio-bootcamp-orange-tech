let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = 10
let resposta = ''

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

for (let i = 0; i < elementos.length; i++) {
    const resultado = elementos[i];
    if(resultado == valor){
        resposta = `Achei ${resultado} na posicao ${[i]} `
        break
    }else {
        resposta = `Numero ${valor} nao encontrado!`
    }
}
console.log(resposta)


/*let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = parseInt(gets());

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

let resposta = ''

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

for (let i = 0; i < elementos.length; i++) {
    const resultado = elementos[i];
    if(resultado == valor){
        resposta = `Achei ${resultado} na posição ${[i]} `
        break
    }else {
        resposta = `Numero ${valor} nao encontrado!`
    }
}
print(resposta)*/
