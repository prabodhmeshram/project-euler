import sys
sys.path.append("..")
from lib import isValidPositiveInteger, get_prime_numbers_for_range, get_prime_multiples_of_number


def get_smallest_multiple(number):
    """
    Find smallest Muliple of 1 to number which is divisible by all numbers from 1 to number

    Function to take number as integer and return the smallest multiple

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
    4 Dec 2017

    """

    if isValidPositiveInteger(number) is not True:
        return 0

    smallest_multiple = 1
    prime_numbers = get_prime_numbers_for_range(number)

    for x in prime_numbers:
        smallest_multiple = smallest_multiple * x

    for x in range(1, number+1):
        if smallest_multiple % x != 0:
            smallest_multiple *= get_smallest_number_to_divide(x, smallest_multiple)

    return smallest_multiple


def get_smallest_number_to_divide(number, divide_with):

    prime_multiple = get_prime_multiples_of_number(number)

    target_number = 1

    divisor = 1
    for x in prime_multiple:
        divisor *= x
        if divide_with % divisor != 0:
            target_number *= x

    return target_number
