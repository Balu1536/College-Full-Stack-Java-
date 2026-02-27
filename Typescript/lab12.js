var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Failure"] = "FAILURE";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
function printStatus(status) {
    console.log("Status/Direction:", status);
}
console.log(printStatus(Direction.Right));
console.log(Direction.Up);
console.log(Status.Success);
var a = Direction.Left;
console.log("Value of a:", a);
