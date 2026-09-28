import { useEffect, useRef } from "react";
import "./About.css";

import mori from "./assets/morimung-food.png";
import beans from "./assets/mori-bean.png";
import bg from "./assets/background/lettuce-vegetable-garden.jpg";

import NormalText from "./components/fonts/normalText";
import HeadingText from "./components/headingText";

function About() {
    const aboutRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = aboutRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add("about-visible");
                } else {
                    section.classList.remove("about-visible");
                }
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={aboutRef}
            id="about"
            className="about-container"
        >
            {/* Background */}
            <div
                className="about-background"
                style={{
                    backgroundImage: `url(${bg})`,
                }}
            />

            {/* Overlay */}
            <div className="about-overlay" />

            {/* Top gradient */}
            <div className="about-top-gradient" />

            {/* Decorative beans */}
            <img
                src={beans}
                alt=""
                className="about-bean bean-one"
            />

            <img
                src={beans}
                alt=""
                className="about-bean bean-two"
            />

            <img
                src={beans}
                alt=""
                className="about-bean bean-three"
            />

            {/* Main content */}
            <div className="about-content">

                {/* LEFT SIDE */}
                <div className="about-text">

                    <span className="about-label">
                        ABOUT MORI MUNG
                    </span>

                    <div className="about-heading">
                        <h1 >Wholesome Goodness.</h1>
                    </div>

                    <NormalText
                        text="Mori Mung brings together carefully selected ingredients to create wholesome food that is naturally good and satisfying. Every ingredient is chosen with purpose, bringing together flavour, nutrition and quality in every bite."
                    />

                    <div className="about-line" />

                    <div className="about-stats">

                        <div className="about-stat">
                            <span>01</span>
                            <p>Natural</p>
                        </div>

                        <div className="about-stat">
                            <span>02</span>
                            <p>Wholesome</p>
                        </div>

                        <div className="about-stat">
                            <span>03</span>
                            <p>Quality</p>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="about-product">

                    <div className="product-glow" />

                    <div className="mori-container">

                        <div className="product-circle1" />

                        <img
                            src={mori}
                            alt="Mori Mung food"
                        />

                    </div>

                    <div className="product-caption">
                        <span>01</span>

                        <p>
                            NATURALLY BETTER
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;