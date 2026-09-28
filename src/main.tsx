import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./main.css";

import Hero from "./Hero.tsx";
import NavBar from "./navBar.tsx";
import ImageCarousel from "./ImageCarousel.tsx";
import Ingredients2 from "./Ingredients2.tsx";
import About from "./About.tsx";
import FAQ from "./FAQ.tsx";
import Footer from "./Footer.tsx";
import Feedback from "./Feedback.tsx";

import Section from "./components/section.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>

        {/* ==========================================
            NAVBAR
        ========================================== */}

        <NavBar />


        {/* ==========================================
            PAGE CONTAINER
        ========================================== */}

        <main className="page-container">

            {/* ==========================================
                HERO
            ========================================== */}

            <Section>
                <Hero />
            </Section>


            {/* ==========================================
                ABOUT
            ========================================== */}

            <Section id="about">
                <About />
            </Section>


            {/* ==========================================
                INGREDIENTS
            ========================================== */}

            <Section id="ingredients">
                <Ingredients2 />
            </Section>


            {/* ==========================================
                FAQ
            ========================================== */}

            <Section id="faq">
                <FAQ />
            </Section>


            {/* ==========================================
                FEEDBACK
            ========================================== */}

            <Section id="feedback">
                <Feedback />
            </Section>


            {/* ==========================================
                FOUND US AT
            ========================================== */}

            <Section id="stores">
                <ImageCarousel />
            </Section>


            {/* ==========================================
                CONTACT / FOOTER
            ========================================== */}

            <Section id="contact">
                <Footer />
            </Section>

        </main>

    </StrictMode>
);