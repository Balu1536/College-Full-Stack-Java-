import {BrowserRouter,Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Contact from "../Contact/contact";
import Dashboard from "../Dashboard/Dashboard";
import Signup from "../Signup/signup";
import Login from "../Login/login";
import About from "../About/about";
import Landing from "../Landing/Landing";
import Courses from "../Courses/courses";
let Employee=[
  {name:"Rajesh", age:150, teaching:"C Language"},
  {name:"Rin", age:200, teaching:"DBMS"},
  {name:"Kin", age:150, teaching:"RDBMS"}
];

export default function Links (){
    return(

        <>

        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Landing />}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>

        
        </>
    )
}