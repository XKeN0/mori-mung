
import logo from "./assets/morimung-logo.png";
import vidbg from "./assets/background/hero-video.mp4";

import "./Hero.css";


function Hero() {

    return (

        <section className="hero-container">


            {/* ==========================================
                BACKGROUND VIDEO
            ========================================== */}

            <video
                className="hero-video"
                src={vidbg}
                autoPlay
                muted
                loop
                playsInline
            />


            {/* ==========================================
                DARK OVERLAY
            ========================================== */}

            <div className="hero-overlay" />


            {/* ==========================================
                CINEMATIC GRADIENT
            ========================================== */}

            <div className="hero-gradient" />


            {/* ==========================================
                HERO CONTENT
            ========================================== */}

            <div className="hero-content">


                {/* SMALL LABEL */}

                <div className="hero-label">

                    <span className="hero-label-line" />

                    <span>
                        NATURAL FOOD · MORI MUNG
                    </span>

                    <span className="hero-label-line" />

                </div>


                {/* LOGO */}

                <img
                    src={logo}
                    alt="Mori Mung"
                    className="mori-mung-logo"
                />


                {/* TAGLINE */}

                <h1 className="hero-title">

                    Naturally Better,
                    <br />

                    <span>Naturally You.</span>

                </h1>


                {/* DESCRIPTION */}

                <p className="hero-description">

                    Wholesome ingredients.
                    <br />
                    Thoughtfully crafted.

                </p>

                <div className="hero-scroll">
                    <br />
                    <span>
                        SCROLL TO EXPLORE
                    </span>

                    <div className="scroll-line">

                        <span />

                    </div>

                </div>


            </div>

        </section>

    );

}


export default Hero;

