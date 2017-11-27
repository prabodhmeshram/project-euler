
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

