/*
3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
*/

const { gets, print } = require('../07 - importacao/funcoesAuxiliares');


const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado)
}



for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado % 2 === 0 ){
        print(numeroSorteado)
    }
}

