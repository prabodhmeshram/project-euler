'use strict'

const expect = require('chai').expect;
const findMultiplesOfThreeAndFive = require('./Problem1/p1').findMultiplesOfThreeAndFive;
const findSumOfEvenFibonacci = require('./Problem2/p2').findSumOfEvenFibonacci;
const findGreatestPrimeFactor = require('./Problem3/p3').findGreatestPrimeFactor;
const getGreatestPalindromeForRange = require('./Problem4/p4').getGreatestPalindromeForRange;
const getSmallestMultiple = require('./Problem5/p5').getSmallestMultiple;


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

describe('Project Euler Problem 3 - Find greatest Prime factor', () => {

    describe('Invalid test cases', () => {
        it('should return 0 for String', () => {
            expect(findGreatestPrimeFactor('Grab')).to.equal(0);
        })

        it('should return 0 for Non Integer', () => {
            expect(findGreatestPrimeFactor('-10.9')).to.equal(0);
            expect(findGreatestPrimeFactor('10.9')).to.equal(0);
        })

        it('should return 0 for Invalid Integer', () => {
            expect(findGreatestPrimeFactor(-10)).to.equal(0);
            expect(findGreatestPrimeFactor(1)).to.equal(0);
        })

    })

    describe('Valid test Cases', () => {
        it('should return proper output for Valid Integer', () => {
            expect(findGreatestPrimeFactor(4)).to.equal(2);
            expect(findGreatestPrimeFactor(10)).to.equal(5);
            expect(findGreatestPrimeFactor(56)).to.equal(7);
        })
    })

});

describe('Project Euler Problem 4 - Find Palindrome for range', () => {

    describe('Invalid test cases', () => {
        it('should return 0 for String', () => {
            expect(getGreatestPalindromeForRange('Grab')).to.equal(0);
        })

        it('should return 0 for Non Integer', () => {
            expect(getGreatestPalindromeForRange('-10.9')).to.equal(0);
            expect(getGreatestPalindromeForRange('10.9')).to.equal(0);
        })

        it('should return 0 for Invalid Integer', () => {
            expect(getGreatestPalindromeForRange(-10)).to.equal(0);
            expect(getGreatestPalindromeForRange(1)).to.equal(0);
        })

    })

    describe('Valid test Cases', () => {
        it('should return proper output for Valid Integer', () => {
            expect(getGreatestPalindromeForRange(999999)).to.equal(906609);
            expect(getGreatestPalindromeForRange(800000)).to.equal(793397);
            expect(getGreatestPalindromeForRange(793397)).to.equal(793397);
        })
    })

});

describe('Project Euler Problem 5 - Get Smallest Multiple for Range', () => {

    describe('Invalid test cases', () => {
        it('should return 0 for String', () => {
            expect(getSmallestMultiple('Grab')).to.equal(0);
        })

        it('should return 0 for Non Integer', () => {
            expect(getSmallestMultiple('-10.9')).to.equal(0);
            expect(getSmallestMultiple('10.9')).to.equal(0);
        })

        it('should return 0 for Invalid Integer', () => {
            expect(getSmallestMultiple(-10)).to.equal(0);
            expect(getSmallestMultiple(1)).to.equal(0);
        })

    })

    describe('Valid test Cases', () => {
        it('should return proper output for Valid Integer', () => {
            expect(getSmallestMultiple(10)).to.equal(2520);
            expect(getSmallestMultiple(5)).to.equal(60);
            expect(getSmallestMultiple((20))).to.equal(232792560);
        })
    })

});