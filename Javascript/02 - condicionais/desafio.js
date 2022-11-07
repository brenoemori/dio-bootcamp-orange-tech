const etanol = 5.79;
const gasolina = 6.66;
const istipoCombustivel = gasolina;
const distanciaKmViagem = 100; 
let gastoMedioCarroKm = istipoCombustivel;

if (!istipoCombustivel == etanol){
    gastoMedioCarroKm = 8
} else {
    gastoMedioCarroKm = 10
};

const valorGasto = (distanciaKmViagem / gastoMedioCarroKm) * istipoCombustivel;

console.log(`${valorGasto.toFixed(2)} R$`)