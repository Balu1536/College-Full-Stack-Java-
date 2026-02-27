type Point={
    x:number,
    y:number
}

function printPoint(pt:Point):void{
    console.log(`x=${pt.x}, y=${pt.y}`);
}
printPoint({x:10,y:200});
