import unittest
from Problem1 import p1
from Problem2 import p2


class MultipleTestCase(unittest.TestCase):
    """
    Test case for checking multiple sum of range method
    """

    print " Running Test Cases for Multiples of 3 and 5"

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

    print " Running Test Cases for Fibonacci Series"
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


if __name__ == '__main__':
    unittest.main()
