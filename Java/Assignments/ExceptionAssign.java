package example;
import java.util.Scanner;


public class ExceptionAssign {

	public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        try {
            System.out.print("Enter numerator: ");
            int a = sc.nextInt();

            System.out.print("Enter denominator: ");
            int b = sc.nextInt();

            int result = a / b;

            System.out.println("Result: " + result);

        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero is not allowed.");
        }
        
        try {
            String text = null;

            System.out.println(text.length());

        }
        catch (NullPointerException e) {
            System.out.println("Error: Object is null. Cannot call methods.");
        }
        
        int[] arr = {10, 20, 30};

        try {
            System.out.print("Enter index: ");
            int index = sc.nextInt();

            System.out.println("Value: " + arr[index]);

        }
        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Invalid array index.");
        }
        
        try {
            System.out.print("Enter a number: ");
            String input = sc.nextLine();

            int num = Integer.parseInt(input);

            System.out.println("Number: " + num);

        }
        catch (NumberFormatException e) {
            System.out.println("Error: Invalid number format.");
        }
        
        try {
            Object obj = "Hello";

            Integer num = (Integer) obj; // wrong cast

        }
        catch (ClassCastException e) {
            System.out.println("Error: Invalid type casting.");
        }
    }
}
