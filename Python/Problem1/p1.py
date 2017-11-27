"""
 Solution to Euler methods in Python 
 Multiples of 3 or 5 below N
"""

def find_multiples_sum_for_range(number_range):
    """
    Find the sum of all the multiples of 3 or 5 below N.

    Function to take number_range as integer and return sum of
    all the multples of 3 or 5 below it.

    Parameters
    ----------
    number_range : int
        Range of number

    Returns
    -------
    int

    Author
    ------
    Prabodh M

    Date
    ------
    26 Nov 2017

    """
    multiple_sum = 0

    if number_range < 3 or isinstance(number_range,int) is False:
        return 0

    for num in range(3, number_range):
        if num % 3 == 0:
            multiple_sum += num
            continue
        if num % 5 == 0:
            multiple_sum += num

    return multiple_sum

find_multiples_sum_for_range(10)
