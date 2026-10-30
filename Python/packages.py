from math import sqrt,factorial,pow,ceil,floor,pi
a = 16
print(sqrt(a))
# factorial
# 10->10*9*8*7*6*5*4*3*2*1
# 90*8
# 720*7=5040*6 = 30240*5 = 151200*4 = 604800*3=18144010*2 =3628800
print(factorial(10))
print(pow(2,3))
print(ceil(4.1))
print(floor(4.9))

rad = 3.5
area = pi * rad**2
print(area)


# random
import random

print(random.randint(100000,999999))
print(random.random())

lst1 = [15,22,87,97,56,78]
print(random.choice(lst1))


import re

text = "python is easy"

# res = re.match("python",text)
res = re.search("python",text)
if(res):
    print("Word found",res.group())
else:
    print("Not found")


# a=10
# print(rf'Hello a v value is:{a}')

password = input("Enter Password")

pattern = (r"(?=.*[A-Z])"
           r"(?=.*[a-z])"
           r"(?=.*\d)"
           r"(?=.*[!@#$^&*])"
           r"[A-Za-z\d!@#$^&*]{8,}")
if re.fullmatch(pattern,password):
    print("Strong password")
else:
    print("Weak Password")


# Numpy -> array
# Pandas-> excel data dataframe