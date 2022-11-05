function escreverNome(nome) {
    return (`Meu nome é ${nome}`);
}

function verificarMaioridade(idade){
    if (idade < 18) {
        return (`${escreverNome('breno')}, sou menor de Idade`);
    } else {
        return (`${escreverNome('breno')}, sou maior de Idade`);
    }
}

console.log(verificarMaioridade(18));
