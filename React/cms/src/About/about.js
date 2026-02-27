import '../About/about.css';
import Footer from '../Footer/footer';
import Edlogo from "../images/Edlogo.png"
function About(){
    return(
        <>
        <div className="about-container">
      <section className="about-section">
      <div className="container">
        <h1 className="about-title">About Bodhana Learning Platform</h1>
        <img src={Edlogo} alt="Logo"/>
        <p className="about-intro">
          At <strong>Bodhana Learning Platform</strong>, we believe that learning
          should be accessible, engaging, and transformative. Our mission is to
          empower learners of all ages by providing a dynamic space where
          knowledge meets creativity.
        </p>

        <div className="about-content">
          <h2>What We Offer</h2>
          <ul>
            <li>Interactive courses with hands-on activities</li>
            <li>Personalized learning pathways at your own pace</li>
            <li>Engaging, responsive UI/UX design</li>
            <li>Community spaces for collaboration</li>
            <li>Continuous updates and fresh content</li>
          </ul>

          <h2>Our Vision</h2>
          <p>
            We envision a world where education is not limited by boundaries.
            Bodhana strives to bridge gaps by combining technology, design, and
            pedagogy to create a platform that is inclusive, scalable, and
            impactful.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li>Accessibility: Learning for everyone, everywhere</li>
            <li>Innovation: Leveraging modern web technologies</li>
            <li>Excellence: Commitment to quality content and design</li>
            <li>Community: Building connections that foster growth</li>
          </ul>
        </div>
      </div>
    </section>
    </div>
      <Footer/>
        </>
    )
}
export default About;