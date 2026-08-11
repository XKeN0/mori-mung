import React, { useState } from "react";
import "./Benefit.css";

// Import your central image here (update the path to match your actual image)
import productImg from "./assets/morimung-benefits.png"; 
import HeadingText from "./components/headingText";

const benefitsData = [
    {
        id: 1,
        title: "100% Organic",
        description: "Crafted using only the finest ingredients, ensuring zero artificial additives.",
        position: "top-left"
    },
    {
        id: 2,
        title: "Rich Nutrients",
        description: "Packed with vital vitamins and minerals your body needs for daily energy.",
        position: "top-right"
    },
    {
        id: 3,
        title: "Healthy Digestion",
        description: "The high fiber content actively supports and improves your gut health.",
        position: "bottom-left"
    },
    {
        id: 4,
        title: "Sustainably Sourced",
        description: "We care about the earth. Every ingredient is harvested using eco-friendly methods.",
        position: "bottom-right"
    }
];

function Benefit() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number | null) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="benefit-container">
            <HeadingText text="Why Choose Mori Mung?" />
            
            <div className="infographic-container">
                {/* Center Product Image */}
                <img src={productImg} alt="Mori Mung Product" className="center-product" />

                {/* The 4 Benefit Accordions */}
                {benefitsData.map((benefit, index) => (
                    <div 
                        key={benefit.id} 
                        className={`accordion-box ${benefit.position} ${openIndex === index ? "is-open" : ""}`}
                    >
                        {/* CSS Line pointing to the center */}
                        <div className="pointer-line"></div>

                        <button 
                            className="accordion-btn" 
                            onClick={() => toggleDropdown(index)}
                        >
                            <span className="accordion-title">{benefit.title}</span>
                            <span className="accordion-icon">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        <div className="accordion-dropdown">
                            <p>{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Benefit;