import React from "react";
import "./About.css";

import mori from "./assets/morimung-food.png";

function About() {
    return (
        <div className="about-container">
            <div className="mori-container">
                <img src={mori} alt="Mori Mung Logo" />
            </div>
            
            <div className="about-content">
                <h1>Mori-Mung</h1>
                <p>
                    Mori Mung is a web application that provides information about various ingredients and their benefits. It aims to educate users on the nutritional value and uses of different ingredients in cooking and health.
                </p>
            </div>
        </div>
    );
}

export default About;