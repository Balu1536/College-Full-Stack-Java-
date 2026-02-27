import { useState } from 'react';
import '../Navigation/navbar.css';
import Edlogo from '../images/Edlogo.png'
import { Link } from 'react-router-dom';
import Login from '../Login/login';
function Navigation(){
    const [isLogged, setisLogged]=useState("");
    return (
        <>
        <div>
            <header>
            <nav className="navbar">
                {isLogged?(
                    <>
                <div className="logo">
                    <img src={Edlogo} alt="logo"/>
                    <h1>Bodhana Learning Platform</h1>
                </div>

                <ul className="nav-links">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">
                        <button className="login-btn" onClick={()=>setisLogged(false)}>Logout</button>
                        </Link></li>
                    <li><Link to="/signup"><button className="signup-btn">Signup</button></Link></li>
                </ul>
                </>):(
                    <>
                <div className="logo">
                    <img src={Edlogo} alt="logo"/>
                    <h1>Bodhana Learning Platform</h1>
                </div>

                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link>
                        <Link to="/home"><button className="login-btn" onClick={()=>setisLogged(true)}>Login</button></Link>
                        </li>
                    <li><Link to="/signup"><button className="signup-btn">Signup</button></Link></li>
                </ul>
                
                </>

                )
            }
            </nav>
        </header>
        </div>
        </>
    );
}
export default Navigation;