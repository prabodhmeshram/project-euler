'use strict'


const lib = require('../lib');
let findGreatestPrimeFactor = (range) => {
    
    if (!lib.isValidPositiveInteger(range))
        return 0;

    if (!lib.isPositiveNumber(range) || range < 2)
        return 0;

    let greatestPrimeNumber;

    let primeNumberArr = lib.getPrimeNumbersForRange(range);

    for (let i = primeNumberArr.length - 1; i >= 0; i--) {
        
        if(range % primeNumberArr[i]==0){
            greatestPrimeNumber = primeNumberArr[i];
            break;
        }
    }

    return greatestPrimeNumber;
}

module.exports.findGreatestPrimeFactor = findGreatestPrimeFactor;