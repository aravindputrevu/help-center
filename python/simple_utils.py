# simple_utils.py - A tiny utility library

def reverse_string(text):
    """Reverses the characters in a string."""
    return text[::-1]

def count_words(sentence):
    """
    Count the words in the given sentence.
    
    Parameters:
        sentence (str): Text whose words should be counted; words are delimited by whitespace.
    
    Returns:
        int: Number of words in `sentence`.
    """
    return len(sentence.split())

def celsius_to_fahrenheit(celsius):
    """
    Convert a temperature from Celsius to Fahrenheit.
    
    Parameters:
        celsius (float | int): Temperature in degrees Celsius.
    
    Returns:
        fahrenheit (float): Temperature in degrees Fahrenheit computed as (celsius * 9/5) + 32.
    """
    return (celsius * 9/5) + 32
