import unittest
from Problem1 import p1


class MultipleTestCase(unittest.TestCase):
    """
    Test case for checking multiple sum of range method
    """

    def test_for_invalid(self):
        self.assertEqual(p1.find_multiples_sum_for_range(2), 0)
        self.assertEqual(p1.find_multiples_sum_for_range(-100), 0)

    def test_for_valid(self):
        self.assertEqual(p1.find_multiples_sum_for_range(10), 23)
        self.assertEqual(p1.find_multiples_sum_for_range(6), 8)


if __name__ == '__main__':
    unittest.main()
