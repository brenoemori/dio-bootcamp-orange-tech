let resultado = 0;
let entrada = 15;


if (entrada % 3 == 0 && entrada % 5 == 0) {
    resultado = `FizzBuzz`
}else if(entrada % 5 == 0) {
    resultado = `Buzz`
} else if(entrada % 3 == 0) {
    resultado = `Fizz`
} else {
    resultado = entrada
}

console.log(resultado)
