import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        if (scanner.hasNextInt()) {
            int N = scanner.nextInt();
            int M = scanner.nextInt();

            for (int i = 0; i < N; ++i) {
                long sum = 0;

                for (int j = 0; j < M; ++j) {
                    if (scanner.hasNextInt()) {
                        int a = scanner.nextInt();
                        sum += a;
                    }
                }
                System.out.println(sum);
            }
        }

        scanner.close();
    }
}
