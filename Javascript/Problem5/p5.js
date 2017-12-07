'use strict'

const lib = require('../lib')

let getSmallestMultiple = (number) => {

    if (!lib.isValidPositiveInteger(number) || number < 2){
        return 0;
    }

    let smallestMultiple = 1;
    let primeNumbers = lib.getPrimeNumbersForRange(number)

    for (let i=0; i < primeNumbers.length; i++){
        smallestMultiple = smallestMultiple * primeNumbers[i];
    }

    for(let y=1; y <= number; y++){
        if (smallestMultiple % y != 0){
            smallestMultiple *= getSmallestNumberToDivide(y, smallestMultiple);
        }
    }
    
    return smallestMultiple;
}

    let getSmallestNumberToDivide = (number, divideWith) =>{
        let primeMultiple = lib.getPrimeMultiplesOfNumber(number);
        
        let targetNumber = 1;
    
        let divisor = 1
        for (let x in primeMultiple){
            divisor *= primeMultiple[x];
            if (divideWith % divisor != 0){
                targetNumber *= primeMultiple[x];
            }
        }

        return targetNumber;
    }

module.exports.getSmallestMultiple = getSmallestMultiple;