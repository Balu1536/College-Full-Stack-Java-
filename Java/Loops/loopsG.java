import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a,n=sc.nextInt();
        int top=sc.nextInt();
        for(int i=1;i<n;i++){
            a=sc.nextInt();
            top=(top<a)?a:top;
            
        }
        System.out.println(top);
    }
}
