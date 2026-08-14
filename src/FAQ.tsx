
import { useEffect, useState } from "react";
import mascot from "./assets/morimung-mascot.png";
import "./FAQ.css";

function FAQ() {
    
    const feedbacks = [
        {
            name: "Aiman",
            message: "The taste is really good! I love it."
        },
        {
            name: "Sarah",
            message: "Mori Mung is now part of my daily routine."
        },
        {
            name: "Daniel",
            message: "Really interesting product. Would definitely recommend!"
        },
        {
            name: "Nadia",
            message: "I love how natural and simple the ingredients are."
        }
    ];

    const [currentFeedback, setCurrentFeedback] = useState(0);
    const [clickCount, setClickCount] = useState(0); 
    const [showContact, setShowContact] = useState(false); 
    const [isVibrating, setIsVibrating] = useState(false);
    
    const handleMascotClick = () => { 
        const newCount = clickCount + 1; 
        setClickCount(newCount); 
        setIsVibrating(true);

        setTimeout(() => {
            setIsVibrating(false);
        }, 300); 

        if (newCount >= 3) { 
            setShowContact(true); 
        } 
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFeedback((prev) => 
                (prev + 1) % feedbacks.length
            );
        }, 10000); // 10 seconds

        return () => clearInterval(interval);
    }, [feedbacks.length]);

    

    const feedback = feedbacks[currentFeedback];

    return (
        <div className="faq-container">

            <div className="feedback-container">

                <h2>Feedbacks</h2>

                <div className="feedback-wrapper">

                    <div
                        className="feedback-card feedback-enter"
                        key={currentFeedback}
                    >
                        <div className="feedback-name">
                            {feedback.name}
                        </div>

                        <p className="feedback-text">
                            "{feedback.message}"
                        </p>
                    </div>

                </div>

            </div>


            <div 
                className={`mascot-container ${showContact ? "show-contact" : ""}`} 
                onClick={handleMascotClick} 
                role="button" 
                tabIndex={0} 
            > 
                <img 
                src={mascot} 
                alt="Mori Mung Mascot" 
                className={`mascot ${isVibrating ? "is-vibrating" : ""}`} 
                /> 

                {showContact && (
                    <div className="content-reveal"> 
                        <h3>Interested?</h3> 
                        <p>Contact us for quotation or testimony.</p> 
                        <a href="tel:+60123456789">+60 12-345 6789</a> 
                    </div>
                ) }
            </div>

            

        </div>
    );
}

export default FAQ;
