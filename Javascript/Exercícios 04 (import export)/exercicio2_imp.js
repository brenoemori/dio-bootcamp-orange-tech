/*2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/

const { gets, print } = require('../07 - importacao/funcoesAuxiliares');


const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado)
}

let menorNumero = Infinity;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado < menorNumero){
        menorNumero = numeroSorteado;
    }
}

print(menorNumero)