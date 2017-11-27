'use strict'
let findMultiplesOfThreeAndFive = (range)=> {
    if(isNaN(range) || 
        !Number.isInteger(range) ||
        range <=3
    )
        return 0;

    
    let sumOfMultiples = 0;

    for(let number=0; number< range; number++){

        if(number%3 == 0){
            sumOfMultiples += number;
        }else if(number %5 == 0){
            sumOfMultiples += number;
        }
    }

    return sumOfMultiples;
    
}

module.exports.findMultiplesOfThreeAndFive = findMultiplesOfThreeAndFive;