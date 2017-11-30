import unittest
from Problem1 import p1
from Problem2 import p2
from Problem3 import p3
from Problem4 import p4


class MultipleTestCase(unittest.TestCase):
    """
    Test case for checking multiple sum of range method
    """

    print " Euler P1: Running Test Cases for Multiples of 3 and 5"

    def test_for_invalid_values(self):
        self.assertEqual(p1.find_multiples_sum_for_range('Hello'), 0)
        self.assertEqual(p1.find_multiples_sum_for_range(10.00), 0)

    def test_for_invalid_integer(self):
        self.assertEqual(p1.find_multiples_sum_for_range(2), 0)
        self.assertEqual(p1.find_multiples_sum_for_range(-100), 0)

    def test_for_valid(self):
        self.assertEqual(p1.find_multiples_sum_for_range(10), 23)
        self.assertEqual(p1.find_multiples_sum_for_range(6), 8)

class EvenFibonacciTestCase(unittest.TestCase):
    """
    Test case for checking the sum of even numbers in Fibo series
    """

    print " Euler P2: Running Test Cases for Fibonacci Series"
    def test_for_invalid_values(self):
        self.assertEqual(p2.sum_of_even_fibonacci('Hello'), 0)
        self.assertEqual(p2.sum_of_even_fibonacci(10.00), 0)
    
    def test_for_invalid_integer(self):
        self.assertEqual(p2.sum_of_even_fibonacci(-2), 0)
        self.assertEqual(p2.sum_of_even_fibonacci(1), 0)
        self.assertEqual(p2.sum_of_even_fibonacci(2), 0)

    def test_for_valid(self):
        self.assertEqual(p2.sum_of_even_fibonacci(10), 10)
        self.assertEqual(p2.sum_of_even_fibonacci(6), 2)


class PrimeFactorTestCase(unittest.TestCase):
    """
    Test case for checking the greatest prime factor
    """

    print " Euler P3: Running Test Cases for Greatest Prime Factor"

    def test_for_invalid_values(self):
        self.assertEqual(p3.get_greatest_prime_factor('Hello'), 0)
        self.assertEqual(p3.get_greatest_prime_factor(10.00), 0)

    def test_for_invalid_integer(self):
        self.assertEqual(p3.get_greatest_prime_factor(-2), 0)
        self.assertEqual(p3.get_greatest_prime_factor(-40), 0)
        self.assertEqual(p3.get_greatest_prime_factor(1), 0)

    def test_for_valid(self):
        self.assertEqual(p3.get_greatest_prime_factor(10), 5)
        self.assertEqual(p3.get_greatest_prime_factor(6), 3)


class Palindrome6Digit(unittest.TestCase):
    """
    Test case for checking the 6 digit palindrome number
    """

    print " Euler P4: Running Test Cases for 6 Digit Palindrome number"

    def test_for_invalid_values(self):
        self.assertEqual(p4.get_palindrome('Hello'), 0)
        self.assertEqual(p4.get_palindrome(10.00), 0)

    def test_for_invalid_integer(self):
        self.assertEqual(p4.get_palindrome(-2), 0)
        self.assertEqual(p4.get_palindrome(-40), 0)
        self.assertEqual(p4.get_palindrome(1), 0)

    def test_for_valid(self):
        self.assertEqual(p4.get_palindrome(999999), 906609)
        self.assertEqual(p4.get_palindrome(800000), 793397)
        self.assertEqual(p4.get_palindrome(793397), 793397)


if __name__ == '__main__':
    unittest.main()
