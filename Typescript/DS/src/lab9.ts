type direction="up" | "down" | "left" | "right";

function move(direction: direction){
    console.log(`Moving ${direction}`);
}

move("up");
move("down");
// move("north");

function formatValue(value:string|number):string{
    if(typeof value ==="string"){
        return value.toUpperCase();
    }
    else if (typeof value ==="number"){
        return value.toFixed(6);
    }
    else{
        return value;
    }
}

console.log(formatValue("hello"));
console.log(formatValue(5));
// console.log(formatValue(true));