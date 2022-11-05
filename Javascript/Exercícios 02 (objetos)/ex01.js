/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
    Crie um método que dado a quantidade de KM's e o preço do combustível nos dê o valor gasto em reais para realizar este percurso

*/ 

class Carro {
    marca; 
    cor;
    gastoCombustivelKmL;

    constructor(marca, cor, gastoCombustivelKmL){
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustivelKmL = gastoCombustivelKmL;
    }
}

function calcularGasto (Carro, distanciaKm){
        const gasolina = 5.6
        const media = (distanciaKm / Carro.gastoCombustivelKmL) * gasolina;
        console.log(`O carro da ${Carro.marca}, da cor ${Carro.cor} vai ter o gasto de: R$ ${media}`)
}

const civic = new Carro('honda' , 'branco', 10)


calcularGasto(civic, 250)