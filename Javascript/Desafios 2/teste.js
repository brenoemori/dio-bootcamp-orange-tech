const symbols = ['*', '/', '+', '-']
let idxSymbol = 0;
let number = 10;
const spins = number
let result = 0;

for(i = 1; i <= spins; i++) {
  if(i == 1) {
    result = number;
  } else {
    if(symbols[idxSymbol] == '*') {
      result = result * number
    } else if(symbols[idxSymbol] == '/') {
      result = result / number
    } else if(symbols[idxSymbol] == '+') {
      result = result + number
    } else if(symbols[idxSymbol] == '-') {
      result = result - number
    }
    idxSymbol++
  }

  if(idxSymbol == symbols.length) {
    idxSymbol = 0;
  }

  number--
}

console.log(result)