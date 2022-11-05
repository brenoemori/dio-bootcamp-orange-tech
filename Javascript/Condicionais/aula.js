//BOOLEAN

const numero = 15;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O número é inválido !')
} else if (numero === 5){
    console.log("O número é inválido !")
} else if (numeroDivisivelPor5){
    console.log("SIM!")
} else {
    console.log("NÃO!")
}