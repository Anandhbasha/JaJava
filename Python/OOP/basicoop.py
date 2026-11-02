# // nexon
# //white
# //blue
# //grey
# //black
# //low
# //mid 
# //top

class Car:
    carName = "Nexon"
    carBrand = "Tata"
    carColor = "White"
    carPrice = 800000
    carType = "Low"
    carMileage = 7.5
    carEngine = 99
    carFuelType = "Petrol"
    carNoOfSeats = 5
    carNoOfDoors = 5
    carNoOfWheels = 4
    def car1Acc(self):
        print(self.carName + "Moves at a speed of 120 km/h")
    def carBrakes(self):
        print(self.carName + "Brakes in 5 seconds")
    def carSteer(self):
        print(self.carName + "Steers at a radius of 5 meters")
    def carFuel(self):
        print(self.carName + "Consumes 17.5 km/litre of fuel")
    def wiper(self):
        print(self.carName + "Wipers work at 3 speeds")


# Object
c1 = Car()
print(c1.carName)
print(c1.carBrand)
print(c1.carColor)
print(c1.carPrice)
c1.car1Acc()
c1.carBrakes()
c1.carSteer()
c2 = Car()
c2.carType="Mid"




# Constructor
# destructor
# encapsulation
# abstraction
# polymorphism
# inheritance
# super
# association
# aggregation