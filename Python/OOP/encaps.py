# access specifiers
# public
# private
class BankAcc:
    __balance = 1000
    def deposit(self, amount):
        self.__balance += amount
        print("After deposit",self.getBalance())
    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount
            print("After withdrawn",self.getBalance())
        else:
            print("Insufficient balance")
    def getBalance(self):
        return self.__balance
acc1 = BankAcc()
print("Before deposit",acc1.getBalance())
acc1.deposit(500)
acc1.withdraw(200)