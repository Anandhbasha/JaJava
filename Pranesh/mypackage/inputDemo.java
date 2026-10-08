package mypackage;

import java.util.Scanner;

public class inputDemo {
    public static void main(String[] args) {
        int x = 0;
        String name = "";
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the name to proceed:");
        name = sc.nextLine();
        System.out.println(name);
        System.out.println("Enter the number to proceed:");
        x = sc.nextInt();
        System.out.println(x);
    }
}
