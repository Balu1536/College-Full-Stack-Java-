package example;

import java.util.Scanner;

class BankAccount {

    private int balance;

    BankAccount(int balance) {
        this.balance = balance;
    }

    synchronized void withdraw(int amount) {

        if (balance >= amount) {
            System.out.println("withdrawing " + amount);

            balance -= amount;

            System.out.println("Remaining balance: " + balance);
        } else {
            System.out.println("Insufficient balance for " + amount);
        }
    }
}

class UserThread extends Thread {

    private BankAccount account;
    private int amount;

    UserThread(BankAccount account, int amount) {
//        super(name);
        this.account = account;
        this.amount = amount;
    }

    public void run() {
        account.withdraw(amount);
    }
}

public class ThreadsAssignment {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("Intial Balance: ");
        BankAccount account = new BankAccount(sc.nextInt());
		System.out.print("Withdrawals: ");
        UserThread t1 = new UserThread(account, sc.nextInt());
        UserThread t2 = new UserThread(account, sc.nextInt());
        UserThread t3 = new UserThread(account, sc.nextInt());

        t1.start();
        t2.start();
        t3.start();
    }
}
