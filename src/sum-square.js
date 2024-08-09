

const sumSquare = (num, pow) => {
    let sumOfPow = 0;
    let sum = 0;

    for(let i = 1; i <= num; i++){
        sum += i;
        sumOfPow += Math.pow(i, pow);
    }
    return {
        'Sumatoria de potencias':sumOfPow, 
        'Potencia de la sumatoria': Math.pow(sum, pow),
        'Resta': Math.pow(sum, pow) - sumOfPow,
    };
}


module.exports = {
    sumSquare
}