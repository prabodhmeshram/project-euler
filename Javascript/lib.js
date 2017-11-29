'use strict'

let lib = {
    getFibonacciForRange : (range)=>{
        
        let fiboList = [];
        let a = 1;
        fiboList.push(a);
        if(range == 1){
            return fiboList;
        }

        let b = 2;
        
        while(b <= range){
            fiboList.push(b);
            let temp = a;
            a = b;
            b = b + temp;
        }

        return fiboList;
    },

    isValidPositiveInteger : (number) =>{

        if (isNaN(number) ||
            !Number.isInteger(number))
                return false;
        
        return true;
    },

    isPositiveNumber: (number) => {
        if(number>0)
            return true;
        
        return false;
    },

    getPrimeNumbersForRange: (range) => {

        let primeNumberArr = [2];
        for(let i=3 ; i <= range; i++){
            let isPrime = true;
            for(let j=0; j < primeNumberArr.length; j++){
                let primenum = primeNumberArr[j];
                if(i%primenum == 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime)
                primeNumberArr.push(i)
        }

        return primeNumberArr;
    }
}


module.exports = lib;

