import Navigation from "../Navigation/navbar";
import Home from "../Home/Home";
// import { Example } from "../Login/login";
import Footer from "../Footer/footer";
import Contact from "../Contact/contact";
import About from "../About/about";
import "../Landing/Landing.css"



let Employee=[
  {name:"Rajesh", age:150, teaching:"C Language"},
  {name:"Rin", age:200, teaching:"DBMS"},
  {name:"Kin", age:150, teaching:"RDBMS"}
];

export default function Landing() {
    return(

        <>
        
    <div className="App">
      <Home Employee={Employee}/>
      <Contact/>
      <About/>
      {/* <Example/> */}
    </div>      

    </>

    );
}