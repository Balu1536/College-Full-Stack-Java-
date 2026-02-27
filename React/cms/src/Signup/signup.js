import Footer from '../Footer/footer';
import '../Signup/signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <>
    <div className="signup-container">
      <h2>Create Your Bodhana Account</h2>
      <form className="signup-form">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email"/>

        <label>Password</label>
        <input type="password" placeholder="Create a password" />

        <Link to="/login"><button type="submit">Sign Up</button></Link>
      </form>

      <p className="login-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
    <Footer/>
    </>
  );
}

export default Signup;