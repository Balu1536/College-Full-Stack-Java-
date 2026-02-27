interface User{
    readonly id:number;
    name:string;
    age?:number;
}

let user1:User={
    id:1,
    name:"Alice",
    age:30
}

console.log(user1);
console.log(user1.id);
console.log(user1.name);
console.log(user1.age);
console.log(user1.name="Bob");
// console.log(user1.id=2);

interface Calculator{
    add(x:number, y:number):number;
    multiply(x:number, y:number):number;
}

let obj:Calculator={
    add(x,y){
        return x+y;
  },
  multiply(x,y){
    return x*y;
  }
}

console.log(obj.add(15,12));
console.log(obj.multiply(17,88));


class Cal implements Calculator{
    add(x:number,y:number){
        return x+y;
    }
    multiply(x:number,y:number){
        return x*y;
    }

}

let obj2 =new Cal();
console.log(obj2.add(22,44));
console.log(obj2.multiply(111,345));