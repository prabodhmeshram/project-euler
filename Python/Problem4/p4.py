import sys
sys.path.append("..")
from lib import is_number_palindrome, isValidPositiveInteger


def get_palindrome(number):
    """
    Find largest Palindrome made of 6 digits by the multiplication of two 3 digit numbers

    Function to take number as integer and return the nearest lesser 6 digit Palindrome 

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
    1 Dec 2017

    """

    num = number
    
    while num > 100000:
        if is_number_palindrome(num) and does_it_have_3_digit_factors(num):
            break
        num -= 1
    
    return num

def does_it_have_3_digit_factors(number):

    it_have = False
    
    for x in range(100,999):
        if number % x == 0 and ( (number/x) > 100 and (number/x) < 999 ):
            print (x,number/x)
            it_have = True
            break

    return it_have 
