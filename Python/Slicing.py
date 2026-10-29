lst1 = [15,22,87,97,56,78]
print(lst1[0])

print(lst1[1::2])
print(lst1[::-2])
# 15 87 56

text = "Hello This is Python Slicing"
#       0123456789
print(text[::-1])
# giiSnhy ish le

lst1[1:3] = [100,200]
print(lst1)


nums = {10,20,30,40,50}
res = list(nums)
print(res)



student ={
    "name":"nithish",
    "age":22,
    "course":"Python",
    "city":"CBE"
}

print(list(student.keys()))
print(list(student.values()))
print(list(student.items()))


# {

# }

def add():
    print("Hello Add")

add()

# if condition:
#     block

# elif
# cannot use switch

# while
# for
for x in lst1:
    print(x)


# range
for i in range(0,11,2):
    print(i)

from index import greet
greet()