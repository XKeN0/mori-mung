import { useEffect, useRef } from "react";
import "./ImageCarousel.css";

import lotus from "./assets/logo-mart/lotus.png";
import seveneleven from "./assets/logo-mart/7e.png";
import jaya from "./assets/logo-mart/JayaGrocer.png";
import speed from "./assets/logo-mart/99speedmart.jpg";
import aeon from "./assets/logo-mart/aeon.png";
import giant from "./assets/logo-mart/giant.png";

export default function ImageCarousel() {
    const sectionRef = useRef<HTMLElement>(null);

    const images = [
        {
            image: seveneleven,
            name: "7-Eleven",
        },
        {
            image: speed,
            name: "99 Speedmart",
        },
        {
            image: jaya,
            name: "Jaya Grocer",
        },
        {
            image: lotus,
            name: "Lotus's",
        },
        {
            image: giant,
            name: "Giant",
        },
        {
            image: aeon,
            name: "AEON",
        },
    ];

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add("carousel-visible");
                } else {
                    section.classList.remove("carousel-visible");
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
            ref={sectionRef}
            id="stores"
            className="carousel-container"
        >
            {/* =================================
                BACKGROUND
            ================================= */}

            <div className="carousel-background" />

            <div className="carousel-glow carousel-glow-one" />
            <div className="carousel-glow carousel-glow-two" />

            {/* =================================
                HEADING
            ================================= */}

            <div className="carousel-heading">
                <div className="carousel-label">
                    <span />
                    WHERE TO FIND US
                    <span />
                </div>

                <h2>
                    Found Us
                    <br />
                    <span>At.</span>
                </h2>

                <p>
                    Bringing Mori Mung closer
                    <br />
                    to you.
                </p>
            </div>

            {/* =================================
                MARQUEE
            ================================= */}

            <div className="carousel-wrapper">
                <div className="carousel-fade carousel-fade-left" />
                <div className="carousel-fade carousel-fade-right" />

                <div className="image-track">
                    {/* ORIGINAL */}

                    {images.map((item, index) => (
                        <div
                            className="logo-card"
                            key={`original-${index}`}
                        >
                            <div className="logo-number">
                                0{index + 1}
                            </div>

                            <div className="logo-image-wrapper">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                />
                            </div>

                            <span className="logo-name">
                                {item.name}
                            </span>
                        </div>
                    ))}

                    {/* DUPLICATE */}

                    {images.map((item, index) => (
                        <div
                            className="logo-card"
                            key={`duplicate-${index}`}
                        >
                            <div className="logo-number">
                                0{index + 1}
                            </div>

                            <div className="logo-image-wrapper">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                />
                            </div>

                            <span className="logo-name">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* =================================
                BOTTOM
            ================================= */}

            <div className="carousel-bottom">
                <span>
                    6 RETAIL PARTNERS
                </span>

                <div className="carousel-bottom-line" />

                <span>
                    MORI MUNG
                </span>
            </div>
        </section>
    );
}