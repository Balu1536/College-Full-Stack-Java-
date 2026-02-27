import java.util.Scanner;

public class Main
{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int sum=0,n = sc.nextInt();
        int arr[] = new int[n];
        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        for(int j=0;j<n;j++){
            if(arr[j]%2!=0){
                sum+=arr[j];
            }
            
        }
        System.out.println(sum);
        }
    
}
