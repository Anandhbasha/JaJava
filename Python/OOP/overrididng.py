class VReg:
    def order(self):
            print("Ordered from VRes")
            super().order()
class NVRes:
     def order(self):
          print("Order from NV Res")
class Res(VReg,NVRes):
    pass

r = Res()
r.order()