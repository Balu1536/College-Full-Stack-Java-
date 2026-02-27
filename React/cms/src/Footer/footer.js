import "../Footer/footer.css";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <>
            <div class="footer-div">
                <section class="footer-links">
                    <ul><li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {/* <li><Link to="/feedback">Feedback</Link></li> */}
                    </ul>
                </section>
                <p>Bodhana Learning platform</p>
                <p>@copy rights 2026</p>
            </div>
        </>
    );
}

export default Footer;