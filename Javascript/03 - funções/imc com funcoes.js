
function calcularImc(pesoEmKg, alturaEmMetro) {
    return pesoEmKg / (alturaEmMetro * alturaEmMetro);
}

function classificarImc(imc) {
    if (imc <= 18.5) {
        return "Status: Abaixo do peso";
    } else if (imc <= 25) {
        return "Status: Peso normal";
    } else if (imc <= 30) {
        return "Status: Acima do Peso";
    } else if (imc <= 40) {
        return "Status: Obesidade";
    } else {
        return "Status: Obesidade Grave!";
    }
}


//main
(function main() {   //função imediatamente invocada (anônima)
    const alturaEmMetro = 1.80;
    const pesoEmKg = 84;

    const imc = calcularImc(pesoEmKg, alturaEmMetro);
    console.log(imc.toFixed(2));
    console.log(classificarImc(imc));
})();

