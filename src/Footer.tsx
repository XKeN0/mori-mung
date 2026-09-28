import { useState } from "react";
import "./Footer.css";
import mascot from "./assets/morimung-mascot.png";

function Footer() {
    const [clickCount, setClickCount] = useState(0);
    const [showContact, setShowContact] = useState(false);
    const [isVibrating, setIsVibrating] = useState(false);

    const handleMascotClick = () => {
        const newCount = clickCount + 1;

        setClickCount(newCount);
        setIsVibrating(true);

        setTimeout(() => {
            setIsVibrating(false);
        }, 300);

        if (newCount >= 3) {
            setShowContact(true);
        }
    };

    return (
        <footer
            id="contact"
            className="footer-container"
        >

            {/* ================================
                TOP
            ================================= */}

            <div className="footer-top">

                <div className="footer-label">
                    <span />
                    MORI MUNG
                    <span />
                </div>
            </div>


            {/* ================================
                MAIN FOOTER
            ================================= */}

            <div className="footer-main">

                {/* MASCOT */}

                <div className="footer-mascot-section">

                    {!showContact && (
                        <div className="mascot-hint">

                            {clickCount === 0 && (
                                <p>
                                    Something interesting is
                                    hiding here... 👀
                                </p>
                            )}

                            {clickCount === 1 && (
                                <p>
                                    Hmm... try clicking again!
                                </p>
                            )}

                            {clickCount === 2 && (
                                <p>
                                    One more time! 👀
                                </p>
                            )}

                        </div>
                    )}

                    <div className="mascot-content">

                        {!showContact && (
                            <button
                                className="mascot-container"
                                onClick={handleMascotClick}
                                aria-label="Mori Mung mascot"
                            >
                                <img
                                    src={mascot}
                                    alt="Mori Mung Mascot"
                                    className={`mascot ${
                                        isVibrating
                                            ? "is-vibrating"
                                            : ""
                                    }`}
                                />
                            </button>
                        )}

                        {showContact && (
                            <div className="content-reveal">

                                <button
                                    className="contact-close"
                                    onClick={() =>
                                        setShowContact(false)
                                    }
                                    aria-label="Close contact"
                                >
                                    ×
                                </button>

                                <span className="contact-label">
                                    LET'S CONNECT
                                </span>

                                <h3>
                                    Interested in
                                    <br />
                                    Mori Mung?
                                </h3>

                                <p>
                                    Want to request a quotation
                                    or share your experience
                                    with us?
                                </p>

                                <div className="contact-buttons">

                                    <a
                                        href="tel:+60123456789"
                                        className="contact-btn"
                                    >
                                        <span>
                                            REQUEST A QUOTATION
                                        </span>

                                        <b>↗</b>
                                    </a>

                                    <a
                                        href="mailto:hello@morimung.com"
                                        className="contact-btn"
                                    >
                                        <span>
                                            SHARE YOUR TESTIMONY
                                        </span>

                                        <b>↗</b>
                                    </a>

                                </div>

                            </div>
                        )}

                    </div>

                </div>


                {/* ================================
                    EXPLORE
                ================================= */}

                <div className="footer-column">

                    <span className="footer-column-label">
                        EXPLORE
                    </span>

                    <nav className="footer-nav">

                        <a href="#home">
                            <span>01</span>
                            Home
                        </a>

                        <a href="#about">
                            <span>02</span>
                            About
                        </a>

                        <a href="#ingredients">
                            <span>03</span>
                            Ingredients
                        </a>

                        <a href="#faq">
                            <span>04</span>
                            FAQ
                        </a>

                    </nav>

                </div>


                {/* ================================
                    SOCIAL
                ================================= */}

                <div className="footer-column">

                    <span className="footer-column-label">
                        FOLLOW
                    </span>

                    <div className="footer-social">

                        <a href="#">
                            Instagram
                            <span>↗</span>
                        </a>

                        <a href="#">
                            Facebook
                            <span>↗</span>
                        </a>

                        <a href="#">
                            TikTok
                            <span>↗</span>
                        </a>

                    </div>

                </div>


                {/* ================================
                    CONTACT
                ================================= */}

                <div className="footer-column footer-contact-column">

                    <span className="footer-column-label">
                        GET IN TOUCH
                    </span>

                    <a
                        href="mailto:hello@morimung.com"
                        className="footer-email"
                    >
                        hello@morimung.com
                    </a>

                    <span className="footer-location">
                        Malaysia
                    </span>

                </div>

            </div>


            {/* ================================
                HUGE BRAND
            ================================= */}

            <div className="footer-brand-name">
                MORI MUNG
            </div>


            {/* ================================
                BOTTOM
            ================================= */}

            <div className="footer-bottom">

                <p>
                    © {new Date().getFullYear()} Mori Mung.
                    All rights reserved.
                </p>

                <div className="footer-bottom-right">

                    <span>
                        NATURALLY BETTER
                    </span>

                    <span className="footer-green-dot" />

                    <span>
                        NATURALLY YOU
                    </span>

                </div>

            </div>

        </footer>
    );
}

export default Footer;