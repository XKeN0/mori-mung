import { useEffect, useRef, useState } from "react";

import "./navBar.css";

export default function Navbar() {
    const [showNav, setShowNav] = useState(true);
    const lastScrollY = useRef(0);

    // ==========================================
    // SHOW / HIDE NAVBAR WHEN SCROLLING
    // ==========================================

    useEffect(() => {
        const container = document.querySelector(
            ".page-container"
        ) as HTMLElement | null;

        if (!container) return;

        const handleScroll = () => {
            const currentScrollY = container.scrollTop;

            // Ignore tiny movements
            if (
                Math.abs(
                    currentScrollY - lastScrollY.current
                ) < 10
            ) {
                return;
            }

            if (currentScrollY > lastScrollY.current) {
                // Scrolling down
                setShowNav(false);
            } else {
                // Scrolling up
                setShowNav(true);
            }

            lastScrollY.current = currentScrollY;
        };

        container.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        return () => {
            container.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    // ==========================================
    // NAVIGATION
    // ==========================================

    const navigateTo = (id: string) => {
        const container = document.querySelector(
            ".page-container"
        ) as HTMLElement | null;

        const section = document.getElementById(id);

        if (!container || !section) return;

        container.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
        });

        // Make sure navbar is visible after clicking
        setShowNav(true);

        // Update scroll reference
        lastScrollY.current = section.offsetTop;
    };

    return (
        <nav
            className={`navBar ${
                showNav ? "show" : "hide"
            }`}
        >

            {/* ==========================================
                NAVIGATION
            ========================================== */}

            <div className="nav-links">

                <button
                    type="button"
                    onClick={() => navigateTo("about")}
                >
                    ABOUT
                </button>

                <button
                    type="button"
                    onClick={() => navigateTo("ingredients")}
                >
                    INGREDIENTS
                </button>

                <button
                    type="button"
                    onClick={() => navigateTo("faq")}
                >
                    FAQ
                </button>

                <button
                    type="button"
                    onClick={() => navigateTo("feedback")}
                >
                    FEEDBACKS
                </button>

                <button
                    type="button"
                    onClick={() => navigateTo("stores")}
                >
                    STORES
                </button>

            </div>


            {/* ==========================================
                CONTACT
            ========================================== */}

            <button
                type="button"
                className="nav-contact"
                onClick={() => navigateTo("contact")}
            >
                <span>
                    CONTACT
                </span>

                <span className="contact-arrow">
                    ↗
                </span>
            </button>

        </nav>
    );
}

