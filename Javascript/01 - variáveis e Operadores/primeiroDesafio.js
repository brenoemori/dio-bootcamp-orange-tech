function calcViagem(precoCombustivel, gastoCarroKm, distKM) {

    let valorTotal = (precoCombustivel * distKM) / gastoCarroKm
    console.log(valorTotal, 'R$')
}

calcViagem(5.79, 10, 100)


