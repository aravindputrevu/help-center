# simple_utils.py - A tiny utility library

def reverse_string(text):
"""Reverses the characters in a string."""
return text[::-1]

def count_words(sentence):
    """Returns the number of words in a sentence."""
    if not isinstance(sentence, str):
        raise TypeError("Input must be a string")
    return len(sentence.split())

def celsius_to_fahrenheit(celsius):
return (celsius * 9/5) + 32


