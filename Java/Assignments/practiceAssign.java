package example;
import java.util.*;

public class practiceAssign {

    static void frequencyOfNumbers(int[] arr, int N) {
        int[] freq = new int[N + 1];

        for (int num : arr) {
            if (num >= 1 && num <= N)
                freq[num]++;
        }

        for (int i = 1; i <= N; i++) {
            System.out.println(i + ": " + freq[i]);
        }
    }

    static void countDistinct(int[] arr) {
        Set<Integer> set = new HashSet<>();

        for (int num : arr)
            set.add(num);

        System.out.println("Distinct count: " + set.size());
    }

    static void findMax(int[] arr) {
        int max = arr[0];

        for (int num : arr)
            if (num > max)
                max = num;

        System.out.println("Maximum: " + max);
    }

    static void sumOfOdd(int[] arr) {
        int sum = 0;

        for (int num : arr)
            if (num % 2 != 0)
                sum += num;

        System.out.println("Sum of odd elements: " + sum);
    }

    static void findDuplicate(int[] arr) {
        boolean found = false;

        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    System.out.println("Duplicate element: " + arr[i]);
                    found = true;
                    return;
                }
            }
        }

        if (!found)
            System.out.println("No duplicates found.");
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter N (size of array): ");
        int N = sc.nextInt();

        int[] arr = new int[N];

        System.out.println("Enter " + N + " elements:");
        for (int i = 0; i < N; i++)
            arr[i] = sc.nextInt();

        System.out.println("\nChoose Operation:");
        System.out.println("1 Frequency of Numbers (1 to N)");
        System.out.println("2 Count Distinct");
        System.out.println("3 Find Maximum");
        System.out.println("4 Sum of Odd Elements");
        System.out.println("5 Find Duplicate");

        int choice = sc.nextInt();

        System.out.println();

        switch (choice) {
            case 1:
                frequencyOfNumbers(arr, N);
                break;
            case 2:
                countDistinct(arr);
                break;
            case 3:
                findMax(arr);
                break;
            case 4:
                sumOfOdd(arr);
                break;
            case 5:
                findDuplicate(arr);
                break;
            default:
                System.out.println("Invalid choice.");
        }
    }
}