# simple_utils.py - A tiny utility library

def reverse_string(text):
    """
    Reverse the characters in the given string.
    
    Parameters:
        text (str): String to reverse.
    
    Returns:
        str: The input string with characters in reverse order.
    """
    return text[::-1]

def count_words(sentence):
    """
    Count words in the given sentence by splitting on whitespace.
    
    Parameters:
        sentence (str): Input text whose words will be separated by any Unicode whitespace (split()).
    
    Returns:
        word_count (int): Number of words found in `sentence`.
    """
    return len(sentence.split())

def celsius_to_fahrenheit(celsius):
    """
    Convert a temperature from Celsius to Fahrenheit.
    
    Parameters:
        celsius (float): Temperature in degrees Celsius.
    
    Returns:
        float: Temperature in degrees Fahrenheit.
    """
    return (celsius * 9/5) + 32
