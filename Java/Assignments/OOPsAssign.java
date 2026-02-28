package example;
import java.util.*;

class Car {
    String brand;
    String model;
    int year;

    Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    void display() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
    }
}

class BankAccount1 {
    private String accountNumber;
    private int balance;

    BankAccount1(String accountNumber, int balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        if (balance >= 0)
            this.balance = balance;
        else
            System.out.println("Invalid balance.");
    }

    void display() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Balance: " + balance);
    }
}

class Animal {
    void makeSound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Bark");
    }
}

class Shape {
    double area() {
        return 0;
    }
}

class Circle extends Shape {
    int radius;

    Circle(int radius) {
        this.radius = radius;
    }

    double area() {
        return 3.14 * radius * radius;
    }
}

class Rectangle extends Shape {
    int length, width;

    Rectangle(int length, int width) {
        this.length = length;
        this.width = width;
    }

    double area() {
        return length * width;
    }
}

abstract class Vehicle {
    abstract void start();
}

class Bike extends Vehicle {
    void start() {
        System.out.println("Bike is starting...");
    }
}

class Sedan extends Vehicle {
    void start() {
        System.out.println("Car is starting...");
    }
}

public class OOPsAssign {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== Class & Object ===");
        Car car = new Car("Toyota", "Corolla", 2022);
        car.display();

        System.out.println("\n=== Encapsulation ===");
        BankAccount1 acc = new BankAccount1("123456789", 5000);
        acc.display();

        System.out.println("\n=== Inheritance ===");
        Animal a = new Dog();
        a.makeSound();

        System.out.println("\n=== Polymorphism ===");
        Shape s1 = new Circle(5);
        Shape s2 = new Rectangle(4, 6);

        System.out.println("Area of Circle: " + s1.area());
        System.out.println("Area of Rectangle: " + s2.area());

        System.out.println("\n=== Abstraction ===");
        Vehicle v1 = new Bike();
        Vehicle v2 = new Sedan();

        v1.start();
        v2.start();
    }
}