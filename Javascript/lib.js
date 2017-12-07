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
    },

    isNumberPalindrome: (number) => {
        if(number == lib.reverseNumber(number))
            return true;
        
        return false;
    },

    reverseNumber: (number) =>{
        let revNum=0;
        let integerNum = number;
        number = number.toString();
        for(let i=0; i < number.length; i++){
            revNum = integerNum%10 + revNum * 10;
            integerNum = Math.floor(integerNum/10);
        }
        return revNum;
    },

    getPrimeMultiplesOfNumber: (number) => {
        let primeList = lib.getPrimeNumbersForRange(number)
        
        let targetList = [];
        for (let x in primeList){
            let divisible = true;
            let divisor = 1;
            while (divisible){
                divisor *= primeList[x];
                if(number % divisor != 0){
                    break;
                }
                targetList.push(primeList[x]);
            }
        }
        return targetList;
    }
}


module.exports = lib;

