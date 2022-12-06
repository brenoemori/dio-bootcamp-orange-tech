const alturaEmMetro = 1.80 ;
const pesoEmKg = 84 ;
const imc = pesoEmKg / (alturaEmMetro * alturaEmMetro)

console.log(imc.toFixed(2))

if (imc <= 18.5) {
    console.log("Status: Abaixo do peso") ; 
} else if (imc <= 25) {
    console.log("Status: Peso normal") ;
} else if (imc <= 30) {
    console.log("Status: Acima do Peso")
} else if (imc <=40) {
    console.log("Status: Obesidade")
} else {
    console.log("Status: Obesidade Grave!")
}