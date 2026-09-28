import { useEffect, useRef, useState } from "react";

import "./Feedback.css";

import protein from "./assets/icons/protein.png";
import salt from "./assets/icons/salt.png";
import fibre from "./assets/icons/fibre.png";
import halal from "./assets/icons/halal.png";

const feedbacks = [
    {
        name: "Aiman",
        message: "The taste is really good! I love it.",
        rating: 5,
    },
    {
        name: "Sarah",
        message: "Mori Mung is now part of my daily routine.",
        rating: 5,
    },
    {
        name: "Daniel",
        message:
            "Really interesting product. Would definitely recommend!",
        rating: 5,
    },
    {
        name: "Nadia",
        message:
            "I love how natural and simple the ingredients are.",
        rating: 5,
    },
];

function Feedbacks() {
    const [currentFeedback, setCurrentFeedback] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    /* ========================================
       SECTION ENTRANCE ANIMATION
    ======================================== */

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add("feedback-visible");
                } else {
                    section.classList.remove("feedback-visible");
                }
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    /* ========================================
       AUTOMATIC FEEDBACK
    ======================================== */

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFeedback((prev) =>
                (prev + 1) % feedbacks.length
            );
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const feedback = feedbacks[currentFeedback];

    return (
        <section
            ref={sectionRef}
            className="feedback-page"
        >

            {/* =====================================
                BACKGROUND
            ===================================== */}

            <div className="feedback-background" />
            <div className="feedback-overlay" />

            <div className="feedback-glow feedback-glow-one" />
            <div className="feedback-glow feedback-glow-two" />


            {/* =====================================
                MAIN CONTENT
            ===================================== */}

            <div className="feedback-main">

                {/* HEADER */}

                <div className="feedback-heading">

                    <span className="feedback-label">
                        WHAT PEOPLE SAY
                    </span>

                    <h1>
                        Loved by
                        <br />
                        <span>our community.</span>
                    </h1>

                    <p>
                        Discover what people think about
                        their Mori Mung experience.
                    </p>

                </div>


                {/* =================================
                    QUOTE
                ================================= */}

                <div className="feedback-quote">

                    <div className="quote-mark">
                        “
                    </div>

                    <div
                        key={currentFeedback}
                        className="quote-content"
                    >

                        <div className="feedback-stars">
                            {"★".repeat(feedback.rating)}
                        </div>

                        <p className="quote-text">
                            {feedback.message}
                        </p>

                        <div className="quote-author">

                            <div className="author-line" />

                            <span>
                                {feedback.name}
                            </span>

                        </div>

                    </div>

                    {/* Navigation */}

                    <div className="feedback-navigation">

                        {feedbacks.map((_, index) => (
                            <button
                                key={index}
                                className={
                                    index === currentFeedback
                                        ? "feedback-dot active"
                                        : "feedback-dot"
                                }
                                onClick={() =>
                                    setCurrentFeedback(index)
                                }
                                aria-label={`View feedback ${
                                    index + 1
                                }`}
                            />
                        ))}

                    </div>

                </div>

            </div>


            {/* =====================================
                BENEFITS
            ===================================== */}

            <div className="feedback-benefits">

                <div className="benefits-heading">
                    <span>WHY MORI MUNG?</span>

                    <div className="benefits-line" />
                </div>

                <div className="benefit-container">

                    <div className="benefit-item">

                        <div className="benefit-icon">
                            <img
                                src={salt}
                                alt="Low Salt"
                            />
                        </div>

                        <div>
                            <span className="benefit-number">
                                01
                            </span>

                            <h3>
                                Low Salt
                            </h3>
                        </div>

                    </div>


                    <div className="benefit-item">

                        <div className="benefit-icon">
                            <img
                                src={fibre}
                                alt="High Fibre"
                            />
                        </div>

                        <div>
                            <span className="benefit-number">
                                02
                            </span>

                            <h3>
                                High Fibre
                            </h3>
                        </div>

                    </div>


                    <div className="benefit-item">

                        <div className="benefit-icon">
                            <img
                                src={protein}
                                alt="Rich in Protein"
                            />
                        </div>

                        <div>
                            <span className="benefit-number">
                                03
                            </span>

                            <h3>
                                Rich in Protein
                            </h3>
                        </div>

                    </div>


                    <div className="benefit-item">

                        <div className="benefit-icon">
                            <img
                                src={halal}
                                alt="Halal"
                            />
                        </div>

                        <div>
                            <span className="benefit-number">
                                04
                            </span>

                            <h3>
                                Halal
                            </h3>
                        </div>

                    </div>

                </div>

            </div>


            

        </section>
    );
}

export default Feedbacks;