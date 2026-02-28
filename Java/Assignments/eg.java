package example;
import java.io.*;
public class eg {
	
	public static void main(String args[]) {
		try {

			File f=null;
			

//			File fi=new File("D:\\\\sts_workspace\\\\example\\\\src\\\\hello.txt");
//
//			FileWriter fw= new FileWriter(fi);
//
//			BufferedWriter bw= new BufferedWriter(fw);
//
//
//
//			bw.write("This is in the Hello file");
//
//
//
//			bw. close();




			FileReader fr=null;
			BufferedReader br=null;
			f=new File("D:\\\\sts_workspace\\\\example\\\\src\\\\hello.txt");
			fr=new FileReader(f);
			br=new BufferedReader(fr);
			String str=br.readLine();
			while(str!=null) {
				System.out.println(str);
				str=br.readLine();
			}
			
			br.close();
			fr.close();




			} catch (IOException e) {

			e.printStackTrace();



			}
	}
}
