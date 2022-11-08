
const { gets, print } = require('./funcoesAuxiliares');


const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado)
}

let marioValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > marioValor){
        marioValor = numeroSorteado;
    }
   
}

 print(marioValor)

