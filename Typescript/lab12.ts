
enum Direction{
    Up=0,
    Down,
    Left,
    Right
}

enum Status{
    Success="SUCCESS",
    Failure="FAILURE",
    Pending="PENDING"
}

function printStatus(status:Status|Direction){
    console.log("Status/Direction:",status);
}
console.log(printStatus(Direction.Right));
console.log(Direction.Up);
console.log(Status.Success);

let a=Direction.Left;
console.log("Value of a:",a);




