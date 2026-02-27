import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        long N = sc.nextLong();
        
        long count3 = N / 3;
        long count5 = N / 5;
        long count15 = N / 15;
        
        long total = count3 + count5 - count15;
        
        System.out.println(total);        
    }
}
