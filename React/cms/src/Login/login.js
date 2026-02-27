import { Link } from 'react-router-dom';
import '../Login/login.css';
import { useState } from 'react';
import Footer from '../Footer/footer';

function Login(){
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [submittedData, setSubmittedData]=useState(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmittedData({
            email:email,
            password:password
        });
    }
    return(
        <>
        <div className="login-container">
            <h2>Login to Bodhana</h2>
            <form className="login-form">
                <label>E-Mail</label>
                <input type='email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>

                <label>Password</label>
                <input type='password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />

                <Link to="/home"><button type='submit'>Login</button></Link>
            </form>
            <p className='signup-link'>Don't have an account?<Link to="/signup">Sign Up</Link></p>
        </div>
        <Footer/>
        </>
    );
}

export function Example(){
    function add(){
        const a=document.getElementById("num1").value;
        const b=document.getElementById("num2").value;
        const sum = Number(a)+Number(b);
        document.getElementById("result").innerText=sum;
        console.log(sum);
    }
    const [name,setName]=useState("");

    return(
        <div>
            <h1>Hello example using jsx expressions.</h1>
            <input type="number" id="num1"/>
            <input type="number" id="num2"/>
            <button onClick={add}>Add</button>
            <h2 id="result"></h2>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <p>{name}</p>
            <p>{setName}</p>
        </div>
    );
}

export default Login;