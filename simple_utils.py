# simple_utils.py - A tiny utility library
def reverse_string(text):
    """Reverses the characters in a string."""
    return text[::-1]
def count_words(sentence):
    """Counts the number of words in a sentence."""
    return len(sentence.split())
def celsius_to_fahrenheit(celsius):
    """Converts temperature from Celsius to Fahrenheit."""
    return (celsius * 9/5) + 32
