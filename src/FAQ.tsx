import { useState } from "react";

import "./FAQ.css";

import packaging from "./assets/mori-packaging.png";


const faqs = [
    {
        question: "What is Mori Mung?",
        answer:
            "Mori Mung is a food product made with carefully selected ingredients, created to provide a simple and enjoyable food experience."
    },
    {
        question: "What ingredients are used?",
        answer:
            "Mori Mung uses carefully selected ingredients. Explore our Ingredients section to discover more about what goes into our products."
    },
    {
        question: "Is Mori Mung suitable for daily consumption?",
        answer:
            "Mori Mung is designed to be an easy addition to your daily routine. Please refer to the product packaging for specific serving and ingredient information."
    },
    {
        question: "How can I request a quotation?",
        answer:
            "Click the Mori Mung mascot three times to reveal our contact information and get in touch with us for a quotation."
    }
];


function FAQ() {

    const [openFAQ, setOpenFAQ] = useState<number | null>(null);


    const handleFAQClick = (index: number) => {

        setOpenFAQ(
            openFAQ === index
                ? null
                : index
        );

    };


    return (

        <section
            id="faq"
            className="faq-container"
        >

            <img
                src={packaging}
                alt=""
                className="faq-packaging-overlay"
            />


            {/* ================================================
                BACKGROUND
            ================================================= */}

            <div className="faq-glow faq-glow-one" />

            <div className="faq-glow faq-glow-two" />


            {/* ================================================
                LEFT SIDE
            ================================================= */}

            <div className="faq-intro">

                <div className="faq-label">

                    <span className="faq-label-line" />

                    <span>
                        NEED TO KNOW?
                    </span>

                </div>


                <h1>

                    Questions,
                    <br />

                    <span>answered.</span>

                </h1>


                <p className="faq-description">

                    Everything you need to know
                    about Mori Mung, from ingredients
                    to getting in touch with us.

                </p>


                {/* ============================================
                    PRODUCT
                ============================================= */}

                <div className="faq-product">

                    <div className="product-circle" />

                    <img
                        src={packaging}
                        alt="Mori Mung packaging"
                    />

                </div>


                <div className="faq-product-caption">

                    <span>01</span>

                    <p>
                        MORI MUNG
                        <br />
                        NATURALLY BETTER
                    </p>

                </div>

            </div>


            {/* ================================================
                RIGHT SIDE
            ================================================= */}

            <div className="faq-content">


                <div className="faq-header">

                    <span>
                        FAQ
                    </span>

                    <p>
                        Find quick answers to
                        common questions.
                    </p>

                </div>


                <div className="faq-list">

                    {faqs.map((faq, index) => {

                        const isOpen =
                            openFAQ === index;


                        return (

                            <div
                                key={faq.question}
                                className={`faq-item ${
                                    isOpen
                                        ? "faq-open"
                                        : ""
                                }`}
                            >


                                <button
                                    className="faq-question"
                                    onClick={() =>
                                        handleFAQClick(index)
                                    }
                                >

                                    <div className="faq-question-left">

                                        <span className="faq-number">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="faq-question-text">
                                            {faq.question}
                                        </span>

                                    </div>


                                    <span className="faq-icon">

                                        <span />

                                        <span />

                                    </span>

                                </button>


                                <div className="faq-answer">

                                    <p>
                                        {faq.answer}
                                    </p>

                                </div>


                            </div>

                        );

                    })}

                </div>


                <div className="faq-footer">

                    <span>
                        STILL HAVE QUESTIONS?
                    </span>

                    <span className="faq-footer-line" />

                    <span>
                        GET IN TOUCH
                    </span>

                </div>


            </div>

        </section>

    );
}


export default FAQ;
