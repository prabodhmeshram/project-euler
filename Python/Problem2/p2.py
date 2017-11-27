import sys
sys.path.append("..")
from lib import get_fibonacci_for_range

def sum_of_even_fibonacci(fibonacci_range):
    """
    Find the sum of all the even Fibonacci Numbers

    Function to take fibonacci_range as integer and return sum of
    all the even numbers 

    Parameters
    ----------
    fibonacci_range : int
        Range of number

    Returns
    -------
    int

    Author
    ------
    Prabodh M

    Date
    ------
    28 Nov 2017

    """

    even_sum = 0

    if fibonacci_range < 3 or isinstance(fibonacci_range, int) is False:
        return 0

    fibo_series = get_fibonacci_for_range(fibonacci_range)

    for num in fibo_series:
        if num % 2 == 0:
            even_sum += num

    return even_sum