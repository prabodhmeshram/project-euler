'use strict'

const expect = require('chai').expect;
const findMultiplesOfThreeAndFive = require('./Problem1/p1').findMultiplesOfThreeAndFive;
const findSumOfEvenFibonacci = require('./Problem2/p2').findSumOfEvenFibonacci;


describe('Project Euler Problem 1 - Sum of Multiple of 3 and 5', ()=>{

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

describe('Project Euler Problem 2 - Sum of even Fibonacci Series number', () => {

    describe('Invalid test cases', () => {
        it('should return 0 for String', () => {
            expect(findSumOfEvenFibonacci('Grab')).to.equal(0);
        })

        it('should return 0 for Non Integer', () => {
            expect(findSumOfEvenFibonacci('-10.9')).to.equal(0);
            expect(findSumOfEvenFibonacci('10.9')).to.equal(0);
        })

        it('should return 0 for Invalid Integer', () => {
            expect(findSumOfEvenFibonacci(-10)).to.equal(0);
            expect(findSumOfEvenFibonacci(1)).to.equal(0);
        })

    })

    describe('Valid test Cases', () => {
        it('should return proper output for Valid Integer', () => {
            expect(findSumOfEvenFibonacci(4)).to.equal(2);
            expect(findSumOfEvenFibonacci(10)).to.equal(10);
            expect(findSumOfEvenFibonacci(40)).to.equal(44);
        })
    })

});