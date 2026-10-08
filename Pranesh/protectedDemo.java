// inheritence
// parent
class Parent{
    protected String property = "House";
}
class Son extends Parent{
    
}

public class protectedDemo {
    public static void main(String[] args) {
        Parent p = new Parent();
        System.out.println(p.property);
        p.property = "Garden";
        // System.out.println(s.property);
    }
}
