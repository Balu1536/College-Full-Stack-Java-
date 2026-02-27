
import java.util.Scanner;
public class Main
{
	public static void main(String[] args) {
	    Scanner sc=new Scanner(System.in);
	    int n=sc.nextInt(),min=Integer.MAX_VALUE,index=-1;
	    int arr[]=new int[n];
	    for(int i=0;i<n;i++){
	        arr[i]=sc.nextInt();
	        if(arr[i]<min){
	        min=arr[i];
	        index=i;
	        }
            
	    }
	    System.out.println(index);
	}
}