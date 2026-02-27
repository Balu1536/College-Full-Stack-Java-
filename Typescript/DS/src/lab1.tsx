
export default function Component(){
    let a:string="hello";
    let b:string="hello";
    let students:string[]=["harry","poter","ron"];
    let arr:number[]=[1,2,3,4,5,6];
    

    
    return (
        <>
        <div>
        <h1>This is new component</h1>
        <p>a:{a}</p>
        <p>b:{b}</p>
        <p>{students}</p>
        <p>{arr.map(n=>(n**2))}</p>
        <p>{a===b?"Equal":"Not Equal"}</p>
        </div>
        </>
    );
}