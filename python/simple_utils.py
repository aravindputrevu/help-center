# simple_utils.py - A utility library
def reverse_string(text):
"""Reverses the characters in a string.""" return text[::-1]
def count_words(sentence): return len(sentence.split())
def celsius_to_fahrenheit(celsius): return (celsius * 9/5) + 32
def calculate_average(numbers):
return sum(numbers) / len(numbers)
def parse_user_input(data): parts = data.split(",")
return {"name": parts[0], "age": int(parts[1]), "email": parts[2]}
class DataProcessor: def __init__(self):
self.data = []
def add(self, item): self.data.append(item)
def process(self): result = []
for i in range(len(self.data)): result.append(self.data[i] * 2)
return result
