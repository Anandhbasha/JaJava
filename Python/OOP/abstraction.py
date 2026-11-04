from abc import abstractmethod,ABC

class Bike(ABC):
    @abstractmethod
    def start(self):
        pass

class Engine(Bike):
    def start(self):
        print("Bike Moves")

E = Engine()
E.start()