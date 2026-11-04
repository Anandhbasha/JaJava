# # single inheritence
# class Dad:
#     property = "House"
#     amount = 5000000
#     bike = "RE"

# class Son(Dad):
#     bike = "R15"
#     def show(self):
#         print(self.property)
#         print(self.amount)
#         print(self.bike)
#         print(super().bike)
# s= Son()
# s.show()

# #mutiple -> one child multiple parent

# class Director:
#     def direct():
#         print("He is a Director of Comali Lovetoday")
#     def show():
#         print("He is a Director")
# class Singer:
#     def sing():
#         print("He sung a song on dude movie")
#     def show():
#         print("He is a Singer")
# class Actor:
#     def act():
#         print("He acted a movie in Lovetoday dude LIK")
#     def show():
#         print("He is a actor")
# # 
# class Pradeep(Director,Singer,Actor):
#     pass

# pr = Pradeep
# pr.act()
# pr.direct()
# pr.sing()
# pr.show()


# mutilevel
# class GrandPa:
#     property = "5 acer land"
# class Dad(GrandPa):
#     pass
# class Son(Dad):
#     pass
# class Grandson(Son):
#     pass

# G = Grandson()
# print(G.property)
# S= Son()
# print(S.property)
# D = Dad()
# print(D.property)


# Hierachical
class Granda:
    property = "5 acer land"
class Dad(Granda):
    pass
class uncle(Granda):
    pass
class aunt(Granda):
    pass