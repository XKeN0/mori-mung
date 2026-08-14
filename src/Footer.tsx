import './Footer.css';
import logo from './assets/morimung-logo.png';

function Footer() {
    return (
        <footer className="footer-container">

            <div className="footer-collumn">

                <div className="footer-brand">
                    <img
                        src={logo}
                        alt="Mori Mung Logo"
                        className="footer-logo"
                    />
                </div>

                <div className="footer-collumn">

    <div className="footer-stack">
        <h3>Links</h3>

        <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#ingredients">Ingredients</a>
            <a href="#faq">FAQ</a>
        </nav>
    </div>

    <div className="footer-stack">
        <h3>Social</h3>

        <div className="footer-social">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
        </div>
    </div>

</div>

                <div className="footer-stack">
                    <div className="footer-contact">
                        <p>
                            Contact:{' '}
                            <a href="mailto:hello@morimung.com">
                                hello@morimung.com
                            </a>
                        </p>
                    </div>
                </div>

                <div className="footer-stack">
                    
                </div>
            </div>

            <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Mori Mung. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <a href="#privacy">Privacy Policy</a>
                        <span>|</span>
                        <a href="#terms">Terms & Conditions</a>
                    </div>
            </div>

        </footer>
    );
}

export default Footer;
