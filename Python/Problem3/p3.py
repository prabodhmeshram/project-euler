import sys
sys.path.append("..")
from lib import get_prime_numbers_for_range, isValidPositiveInteger


def get_greatest_prime_factor(number):
    """
    Find greatest Prime factor for a number

    Function to take number as integer and return the greatest prime factor of the number

    Parameters
    ----------
    number : int
        Range of number

    Returns
    -------
    int

    Author
    ------
    Prabodh M

    Date
    ------
    29 Nov 2017

    """

    if isValidPositiveInteger(number) is not True:
        return 0

    prime_numbers = get_prime_numbers_for_range(number)

    for prime in reversed(prime_numbers):
        if number % prime == 0:
            greatest_factor = prime
            break

    return greatest_factor
