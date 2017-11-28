'use strict'

const lib = require('../lib');

let findSumOfEvenFibonacci = (range)=>{

    if (!lib.isValidPositiveInteger(range))
        return 0;
    
    if(!lib.isPositiveNumber(range))
        return 0;
    

    let palindromeList = lib.getFibonacciForRange(range);
    
    let sumOfEvenNumbers = palindromeList.reduce((preVal, elem)=>{
        if(elem % 2 == 0){
            let bt = preVal + elem;
            return bt;
        }
        return preVal;
    },0);

    return sumOfEvenNumbers;
}

module.exports = { findSumOfEvenFibonacci};