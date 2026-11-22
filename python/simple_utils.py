# simple_utils.py - A utility library
from email.mime import text

def reverse_string(text):
    """Reverses the characters in a string."""
    return text[::-1]

def count_words(sentence):
    """Counts the number of words in a sentence."""
    return len(sentence.split())

def celsius_to_fahrenheit(celsius):
    """Converts Celsius to Fahrenheit."""
    return (celsius * 9/5) + 32

def calculate_average(numbers):
    """Calculates the average of a list of numbers."""
    return sum(numbers) / len(numbers)

def parse_user_input(data):
    """Parses user input into a dictionary."""
    parts = data.split(",")
    return {"name": parts[0], "age": int(parts[1]), "email": parts[2]}

class DataProcessor:
    def __init__(self):
        self.data = []

    def add(self, item):
        self.data.append(item)

    def process(self):
        result = []
        for i in range(len(self.data)):
            result.append(self.data[i] * 2)
        return result