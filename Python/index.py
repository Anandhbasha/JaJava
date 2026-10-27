# variable and datatypes
# print("This is Python","Basics of Python",sep="------------------------")
# new line
# print("")
# Swapping values
a,b,c=10,20,40
b,c,a = a,b,c
#b- 10
#c- 20
# a-40
print("a value is:",a,"\nB value is:",b,"\nC value is:",c)

# default or simple data types
# int
# float
height = 6.2
# string
# bool
todayClass = True

# Complex data type
# List->array
x = [1,2,3,4]
x[1] = 70
print(x[1])
# tuple
y = (10,20,30,40)
# y[0] =70
print(y[0])
# set
s = {101,104,107,108,106,106,101,104,106,101}
print(s)
# dict->Object
students = {
    "studentname":"Janu",
    "studentCourse":"Python",
    "studentLoction":"CBE"
}
print(students["studentCourse"])


# reverse indexing
lst1 = [15,22,87,97,56,78]
# 15 ->0 
# 22 ->1 
# 87 ->2 
# 97 ->3 ->-3
# 56 ->4 ->-2
# 78 ->5 ->-1
print(lst1[-1])

# Operators
# Floor division
print(10/3)
print(10//3)
# Membership
print(15 in lst1)
print(10 not in lst1)
# indendity
a=10  #5
b=15
print(a is b)
lst2 = lst1
print(lst1 is lst2)
# bitwise
# 10->0 1
# 10/2->
# c->5/2->2
# r ->0

# 1010->10
# 7->
# c->3->
# R->1

# 111
# 1*2^2->4
# 1*2^1->2
# 1*2^0 ->1->7
# 1010
# 1011
# 0010
# 
# 0*2^3->0
# 1*2^2->4
# 0*2^1->2
# 0*2^0->1
a=10
b=8

# 1000
# 1010
# 1000
# 
print(a&b)
# print(bin(7))
# print(bin(10))

# 0b1010
# 0b0111
