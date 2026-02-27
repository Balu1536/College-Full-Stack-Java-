import '../Contact/contact.css';
import Footer from '../Footer/footer';
function Contact() {
    return (
        <>
            <div className="container">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-intro"> We’d love to hear from you! Whether you have questions, feedback, or ideas to share, the Bodhana Learning Platform team is here to help. </p>
                <div className="contact-content">
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p>Email: <a href="mailto:support@bodhana.com">support@bodhana.com</a></p>
                        <p>Phone: +91 98765 43210</p>
                        <p>Address: Bodhana Learning Platform, Kadapa, India</p>
                    </div>
                    <div className="contact-form">
                        <h2>Send Us a Message</h2>
                        <form className='form'>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn-submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        <Footer/>



        </>
    )
}
export default Contact;