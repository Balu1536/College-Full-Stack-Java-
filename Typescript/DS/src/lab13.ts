class Student{
    name: string;
    age:number;
    private rollNo:number=10;

    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }
    showRollNo(rollNo:number):number{
        this.rollNo=rollNo;
        return this.rollNo;
    }
}

const student1= new Student("Balu",20);
console.log(student1.name);
console.log(student1.age);

// console.log(student1.rollNo);
console.log(student1.showRollNo(25)); 


