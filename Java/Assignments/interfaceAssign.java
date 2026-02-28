package example;

interface RemoteControl {
    void powerOn();
    void powerOff();
    void increaseVolume();
    void decreaseVolume();
}

class TV implements RemoteControl {

    public void powerOn() {
        System.out.println("TV is now ON.");
    }

    public void powerOff() {
        System.out.println("TV is now OFF.");
    }

    public void increaseVolume() {
        System.out.println("TV volume increased.");
    }

    public void decreaseVolume() {
        System.out.println("TV volume decreased.");
    }
}

class AC implements RemoteControl {

    public void powerOn() {
        System.out.println("AC is now ON.");
    }

    public void powerOff() {
        System.out.println("AC is now OFF.");
    }

    public void increaseVolume() {
        System.out.println("AC cooling increased.");
    }

    public void decreaseVolume() {
        System.out.println("AC cooling decreased.");
    }
}

class Speaker implements RemoteControl {

    public void powerOn() {
        System.out.println("Speaker is now ON.");
    }

    public void powerOff() {
        System.out.println("Speaker is now OFF.");
    }

    public void increaseVolume() {
        System.out.println("Speaker volume increased.");
    }

    public void decreaseVolume() {
        System.out.println("Speaker volume decreased.");
    }
}


public class interfaceAssign {

	
	public static void main(String[] args) {

        RemoteControl device;

        System.out.println("=== TV Control ===");
        device = new TV();
        device.powerOn();
        device.increaseVolume();
        device.decreaseVolume();
        device.powerOff();

        System.out.println("\n=== AC Control ===");
        device = new AC();
        device.powerOn();
        device.increaseVolume();
        device.decreaseVolume();
        device.powerOff();

        System.out.println("\n=== Speaker Control ===");
        device = new Speaker();
        device.powerOn();
        device.increaseVolume();
        device.decreaseVolume();
        device.powerOff();
    }
}
