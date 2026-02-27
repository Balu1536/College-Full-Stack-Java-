interface StudentList{
    name:string;
        marks:number;        
}

let StudentList1:StudentList[]=[
    {name:"k",marks:22},
    {name:"r",marks:55},
    {name:"e", marks:78}
];

console.log(StudentList1);
console.log(StudentList1.map((student)=>`Name:${student.name} and Marks:${student.marks}`));



type PointType={
    x:number;
    y:number;
}

interface PointInterface{
    x:number;
    y:number;
}

function printPoint(pt:PointType|PointInterface){
    console.log(`x=${pt.x}, y=${pt.y}`);
}

printPoint({x:10,y:20});
let k:PointInterface={y:99,x:99};
console.log(printPoint(k));

let p:PointType={x:99,y:100};
console.log(printPoint(p));