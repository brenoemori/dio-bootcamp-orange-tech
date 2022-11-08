
const entradas = [ 
    5,
    50,
    10,
    98,
    23, 
    24,
    97,
    36,
    72,
    18,
    43,
    240,
    8,
    1,
    27,
    30,
    68,
    49,
    87,
    14
];


let i = 0;

function gets() {
    const valor = entradas[i]
    i++
    return valor;
}

function print(texto){
    console.log(texto);
}


module.exports = { gets, print };