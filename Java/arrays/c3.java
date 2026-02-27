
import java.util.Scanner;
public class Main
{
	public static void main(String[] args) {
	    Scanner sc=new Scanner(System.in);
	    int n=sc.nextInt();
	    int check=0, arr[]=new int[n];
	    for(int i=0;i<n;i++){
	        arr[i]=sc.nextInt();

	    }
	    int search=sc.nextInt();
	    for(int i=0;i<n;i++){
	        if(search==arr[i])
	        check=1;
	    }
	    System.out.println((check==1)?"Yes":"No");
	}
}