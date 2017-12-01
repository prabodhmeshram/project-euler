'use strict'

const lib = require('../lib')

let getGreatestPalindromeForRange = (range) =>{

    let palindrome;
    for(let i=range; i > 100000; i--){
        if (lib.isNumberPalindrome(i) && isHavingTwoThreeDigitFactor(i)){
            palindrome = i;
            break;
        }
    }

    return palindrome;
}

let isHavingTwoThreeDigitFactor = (number) =>{
    let itHave = false

    for ( let i = 100; i < 999; i++){
        if (number % i == 0 && ((number / i) > 100 && (number / i) < 999) ){
            itHave = true;
            break;
        }
    }

    return itHave;
}