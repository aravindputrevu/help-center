#simple_utils.py -  A tiny utility library

def reverse_string(test):
    return test[::-1]

def count_words(sentence):
    return len(sentence.split())

def celcius_to_fahrenheit(celcius):
    return (celcius*9/5) + 32
