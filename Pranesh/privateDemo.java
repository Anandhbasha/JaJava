// access specifiers
// private
import mypackage.inputDemo;
class Students{
    private int marks = 280;
    void showMark(){
        System.out.println(marks);
    }
}
public class privateDemo {
    public static void main(String[] args) {
        Students s1 = new Students();
        s1.showMark();
    }
}
