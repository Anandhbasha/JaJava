# class calculator:
#     def add(self,a=0,b=0,c=0,d=0):  
#         return a+b+c+d

# c1 = calculator()
# print(c1.add(10,20))
# print(c1.add(10,20,30))
# print(c1.add(10,20,30,40))

# tuple


class calculator:
    def add(self,*args):  
        total = 0
        for i in args:
            total+=i
        return total
        

c1 = calculator()
print(c1.add(10,20))
print(c1.add(10,20,30))
print(c1.add(10,20,30,40))


class employee:
    def calSalary(self,basic,bonus=0,allowence = 0):
        return basic+bonus+allowence

e1 = employee()
e2 = employee()
print(e1.calSalary(22000,18000,7000))
print(e2.calSalary(25000,12000,5000))