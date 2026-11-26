import { useEffect, useRef, useState } from "react";

import "./navBar.css";

const LINKS = [
    { id: "about", label: "ABOUT" },
    { id: "ingredients", label: "INGREDIENTS" },
    { id: "faq", label: "FAQ" },
    { id: "feedback", label: "FEEDBACKS" },
    { id: "stores", label: "STORES" },
];

export default function Navbar() {
    const [showNav, setShowNav] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const lastScrollY = useRef(0);
    const navRef = useRef<HTMLElement>(null);

    // Show / hide navbar when scrolling
    useEffect(() => {
        const container = document.querySelector(
            ".page-container"
        ) as HTMLElement | null;

        if (!container) return;

        const handleScroll = () => {
            const currentScrollY = container.scrollTop;

            if (Math.abs(currentScrollY - lastScrollY.current) < 10) {
                return;
            }

            if (currentScrollY > lastScrollY.current) {
                setShowNav(false);
                setMenuOpen(false); // close menu when hiding
            } else {
                setShowNav(true);
            }

            lastScrollY.current = currentScrollY;
        };

        container.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    // Close the menu when tapping outside the navbar
    useEffect(() => {
        if (!menuOpen) return;

        const handleOutside = (e: PointerEvent) => {
            if (
                navRef.current &&
                !navRef.current.contains(e.target as Node)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("pointerdown", handleOutside);
        return () =>
            document.removeEventListener("pointerdown", handleOutside);
    }, [menuOpen]);

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

        setShowNav(true);
        setMenuOpen(false);
        lastScrollY.current = section.offsetTop;
    };

    return (
        <nav
            ref={navRef}
            className={`navBar ${showNav ? "show" : "hide"}`}
        >
            {/* Mobile menu toggle (hidden on desktop) */}
            <button
                type="button"
                className={`nav-toggle ${menuOpen ? "open" : ""}`}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
            >
                <span />
                <span />
                <span />
            </button>

            {/* Links */}
            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                {LINKS.map((link) => (
                    <button
                        key={link.id}
                        type="button"
                        onClick={() => navigateTo(link.id)}
                    >
                        {link.label}
                    </button>
                ))}
            </div>

            {/* Contact */}
            <button
                type="button"
                className="nav-contact"
                onClick={() => navigateTo("contact")}
            >
                <span>CONTACT</span>
                <span className="contact-arrow">↗</span>
            </button>
        </nav>
    );
}