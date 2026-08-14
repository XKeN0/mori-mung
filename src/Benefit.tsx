import React, { useState } from "react";
import "./Benefit.css";

// Import your central image here (update the path to match your actual image)
import productImg from "./assets/morimung-benefits.png";
import checkeredBg from "./assets/background/checkered.png" 
import HeadingText from "./components/headingText";
import protein from "./assets/icons/protein.png"
import salt from "./assets/icons/salt.png"
import fibre from "./assets/icons/fibre.png"
import halal from "./assets/icons/halal.png"


function Benefit() {

    return (
        <div className="benefit-container">
            

            <div className="icon-container">

                <HeadingText text="Why Choose Mori Mung?" />

                <div className="benefit-item">
                    <img src={salt} alt="Salt" />
                    <span>Low Salt</span>
                </div>

                <div className="benefit-item">
                    <img src={fibre} alt="Fibre" />
                    <span>High Fibre</span>
                </div>

                <div className="benefit-item">
                    <img src={protein} alt="Protein" />
                    <span>Rich in Protein</span>
                </div>

                <div className="benefit-item">
                    <img src={halal} alt="Halal" />
                    <span>Halal</span>
                </div>

            </div>
            
        </div>
    );
}

export default Benefit;