import whatshap from "../assets/whatsapp.png";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h2>Get the Latest News</h2>
          <p>
            Sign up to get the latest hair and beauty tips and offers right to
            your inbox!
          </p>
          <form>
            <textarea placeholder="Feedback" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
        <div className="footer-section">
          <h2>Hours</h2>
          <p>Monday 9 AM - 5 PM</p>
          <p>Tuesday 9 AM - 5 PM</p>
          <p>Wednesday 9 AM - 5 PM</p>
          <p>Thursday 9 AM - 5 PM</p>
          <p>Friday 9 AM - 5 PM</p>
          <p>Saturday 9 AM - 7 PM</p>
          <p>Sunday 10 AM - 1 PM</p>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <p>8002264717</p>
          <p>
            <Link to="mailto:pk0158548@gmail.com">pankaj@gmail.com</Link>
          </p>
        </div>
        <div className="footer-section">
          <h2>Social</h2>
          <p>
            Follow us on social media to keep up with all of our latest news,
            promotions and campaigns!
          </p>
          <div className="social-icons">
            <Link to="https://wa.me/8002264717">
              <img src={whatshap} alt="Facebook" />
            </Link>
            <Link to="https://www.linkedin.com/feed/">
              <img src={linkedin} alt="Twitter" />
            </Link>
            <Link to="https://www.instagram.com/">
              <img src={insta} alt="Instagram" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Powered by Coder jii</p>
        <p>Design by Pankaj The Coder</p>
      </div>
    </footer>
  );
};

export default Footer;
