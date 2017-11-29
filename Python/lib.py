
def get_fibonacci_for_range(range):
    """
    Get Fibonacci series

    Function to take fibonacci_range as integer and return fibonacci series 

    Parameters
    ----------
    range : int
        Range of number

    Returns
    -------
    list

    Author
    ------
    Prabodh M

    Date
    ------
    28 Nov 2017

    """

    a = 1
    fibo_list = []

    fibo_list.append(a)
    if range == 1:
        return fibo_list

    b = 2

    while(b<range):
        fibo_list.append(b)
        a , b = b , a + b

    return fibo_list


def get_prime_numbers_for_range(num_range):
    """
    Get Prime numbers series

    Function to take num_range as integer and return prime numbers till number

    Parameters
    ----------
    num_range : int
        Range of number

    Returns
    -------
    list

    Author
    ------
    Prabodh M

    Date
    ------
    29 Nov 2017

    """

    prime_list = []

    prime_list.append(2)

    for num in range(3, num_range+1):
        is_prime = True
        for prime in prime_list:
            if num % prime is 0:
                is_prime = False
                break
        if is_prime:
            prime_list.append(num)

    return prime_list


def isValidPositiveInteger(number):
    """
    Check if number is valid positive integer

    Parameters
    ----------
    number : int

    Returns
    -------
    bool

    Author
    ------
    Prabodh M

    Date
    ------
    29 Nov 2017

    """
    if isinstance(number, int) and number > 0:
        return True
    return False
