class Student{
    readonly idc:number;
    constructor(idc:number){
        this.idc=idc;
    }
}
const student1=new Student(101);
console.log(student1.idc);
class Animal{
    name:string="dog";
    makeSound():void{
        console.log("bow");
}
}

class Dog extends Animal{
    breed:string="kjkj";
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

let ob=new Dog();
console.log(ob.name);
console.log(ob.breed);
ob.makeSound();