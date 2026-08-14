import "./About.css";

import mori from "./assets/morimung-food.png";
import beans from "./assets/mori-bean.png"
import bg from "./assets/background/lettuce-vegetable-garden.jpg"
import NormalText from "./components/fonts/normalText";
import HeadingText from "./components/headingText";

function About() {
    return (
        <div className="about-container">
            <div className="mori-container"
            style={{ backgroundImage: `url(${bg})` }}>
                <img src={mori} alt="Mori Mung Logo" />
            </div>
            
            <div className="about-content">                
                <HeadingText text={"Wholesome Goodness."}></HeadingText>
                <NormalText text={"Mori Mung is a web application that provides information about various ingredients and their benefits. It aims to educate users on the nutritional value and uses of different ingredients in cooking and health."}></NormalText>
                <img src={beans} alt="Mori Beans"></img>
            </div>
        </div>
    );
}

export default About;