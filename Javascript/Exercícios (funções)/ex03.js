const valorCompra = 120;
const debito = valorCompra - (valorCompra / 10) ;//10% Desconto
const pix = valorCompra - ((valorCompra / 100) * 15) ;//15% Desconto
const numParcelas = 10;
let juros = ((valorCompra / numParcelas) / 10) ;//10%Juros

if (numParcelas <= 2) {
    juros = 0
} 

const parcelado = (`Total : ${numParcelas} parcelas de R$ ${(valorCompra / numParcelas) + juros}`);

console.log(parcelado)

