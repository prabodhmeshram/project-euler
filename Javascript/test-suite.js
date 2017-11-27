'use strict'

const expect = require('chai').expect;
const findMultiplesOfThreeAndFive = require('./Problem1/p1').findMultiplesOfThreeAndFive;


describe('Project Euler Problem 1 - Summ of Multiple of 3 and 5', ()=>{

    describe('Invalid test cases', ()=>{
        it('should return 0 for String', ()=>{
            expect(findMultiplesOfThreeAndFive('Grab')).to.equal(0);
        })

        it('should return 0 for Non Integer', () => {
            expect(findMultiplesOfThreeAndFive('-10.9')).to.equal(0);
            expect(findMultiplesOfThreeAndFive('10.9')).to.equal(0);
        })

        it('should return 0 for Invalid Integer', () => {
            expect(findMultiplesOfThreeAndFive(-10)).to.equal(0);
            expect(findMultiplesOfThreeAndFive(3)).to.equal(0);
        })
    })

    describe('Valid test Cases', ()=>{
        it('should return proper output for Valid Integer', () => {
            expect(findMultiplesOfThreeAndFive(4)).to.equal(3);
            expect(findMultiplesOfThreeAndFive(10)).to.equal(23);
        })
    })

});