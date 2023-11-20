# create a  function that shows random number btw 1-9 in py
import random

def randomFunc(x):
    print(random.randrange(1, x))

# randomFunc(20)

# looping through a string in px

for letters in "Banana":
    print(letters)

txt = "The best things in life are free!"
# print("free" in txt)

b = "Hello, World!"
# print(b[1:5])

a = "Hello, World!"
print(a.replace("H", "J"))


quantity = 3
itemno = 567
price = 49.95
myorder = "I want to pay {2} dollars for {0} pieces of item {1}."
# print(myorder.format(quantity, itemno, price))

fruits = "apple"

for i in range(len(fruits)):
    print(fruits[i])

thislist = ["apple", "banana", "cherry"]
# [print(x) for x in thislist]

# Correct syntax to get the length of a list
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

# Using len() function
length_of_fruits = len(fruits)

print("Length of fruits:", fruits[1])

x = "john"
print(len())