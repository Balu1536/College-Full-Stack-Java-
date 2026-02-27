import { useState } from "react";
import { Link } from "react-router-dom";

function Home({Employee})
{
    return(
        <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Bodhana</h1>
        <p>Your gateway to personalized learning and growth.</p>
        <Link to="/courses"><button className="cta-button">Explore Courses</button></Link>
      </header>

      <section className="features-section">
        <div className="feature-card">
          <h2>Expert-Led Courses</h2>
          <p>Learn from industry professionals across tech, business, and creative fields.</p>
        </div>
        <div className="feature-card">
          <h2>Personalized Learning</h2>
          <p>Track your progress and get recommendations tailored to your goals.</p>
        </div>
        <div className="feature-card">
          <h2>Community Support</h2>
          <p>Join a vibrant community of learners and mentors.</p>
        </div>
      </section>

      <section className="testimonials-section">
  <h2>What Our Learners Say</h2>
  <div className="horizontal">
    <span className="testimonial"><p>"Bodhana helped me switch careers with confidence!"</p>
    <p>Priya, Data Analyst</p></span>
    <span className="testimonial"><p>"The courses are practical and easy to follow."</p>
    <p>Arjun, Software Developer</p></span>
  </div>
</section>
<h1>Our Mentors</h1>
<div className="divEmployee">
    {Employee.map((e,index)=>(
        <div  className="teach-details">
          <li key={index}>
            Name:{e.name}<br/>
            Age:{e.age}<br/>
            teaching:{e.teaching}
            </li></div>
      ))}
      </div>
</div>
    );
}
export default Home;