import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int T = sc.nextInt();
        
        for (int t = 0; t < T; t++) {
            int A = sc.nextInt();
            int B = sc.nextInt();
            int C = sc.nextInt();
            
            int oddCount = 0;
            if (A % 2 != 0) oddCount++;
            if (B % 2 != 0) oddCount++;
            if (C % 2 != 0) oddCount++;
            
            if (oddCount == 1 || oddCount == 2) {
                System.out.println("YES");
            } else {
                System.out.println("NO");
            }
        }
        
        sc.close();
    }
}
