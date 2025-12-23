# simple_utils.py - A tiny utility library
def reverse_string(text):
    """
    Return the characters of the input string in reverse order.
    
    Parameters:
        text (str): Input string to reverse.
    
    Returns:
        str: The reversed string.
    """
    return text[::-1]

def count_words(sentence):
    """
    Count the words in a sentence.
    
    Counts sequences of characters separated by whitespace in the given sentence and returns that count.
    
    Parameters:
    	sentence (str): Input text to count words in.
    
    Returns:
    	int: The number of words in the sentence.
    """
    return len(sentence.split())

def celsius_to_fahrenheit(celsius):
    """
    Convert a temperature from degrees Celsius to degrees Fahrenheit.
    
    Parameters:
        celsius (float | int): Temperature in degrees Celsius.
    
    Returns:
        float: Temperature in degrees Fahrenheit.
    """
    return (celsius * 9/5) + 32