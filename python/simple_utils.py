# simple_utils.py - A tiny utility library
def reverse_string(text):
    """Return the reverse of the input string."""
    return text[::-1]


def count_words(sentence):
    """Return the number of whitespace-separated words in the sentence."""
    return len(sentence.split())


def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit."""
    return (celsius * 9 / 5) + 32
