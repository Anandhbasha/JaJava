class Bike{
    String BikeName = "Shine";
    String BikeBrand = "Honda";
    String BikeColor = "White";
    int BikeNoofwheels = 2;
    int BiketankCapacity = 15;
    int BikeMilage = 50;

    void bikeacc(){
        System.out.println("BikeMoves");
    }
    void bikebreake(){
        System.out.println("BikeStops");
    }
}
public class OOP {
    public static void main(String[] args) {
        Bike b2 = new Bike();
        b2.BikeColor= "Black";
        System.out.println(b2.BikeName);
        System.out.println(b2.BikeColor);
        System.out.println(b2.BikeMilage);
        Bike b3 = new Bike();
        b3.BikeMilage = 55;
        b3.BikeColor= "Grey";
        System.out.println(b3.BikeName);
        System.out.println(b3.BikeMilage);
        System.out.println(b3.BikeColor);
    }
}
