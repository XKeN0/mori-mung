import "./ImageCarousel.css";
import lotus from "./assets/logo-mart/lotus.png";
import seveneleven from "./assets/logo-mart/7e.png";
import jaya from "./assets/logo-mart/JayaGrocer.png";
import speed from "./assets/logo-mart/99speedmart.jpg";
import aeon from "./assets/logo-mart/aeon.png";
import giant from "./assets/logo-mart/giant.png";
import HeadingText from "./components/headingText";


export default function ImageCarousel() {

  const images = [
    seveneleven,
    speed,
    jaya,
    lotus,
    giant,
    aeon
  ];

  return (
    <div className="carousel-container">
      <HeadingText text="Found Us At" />
      <div className="image-track">

        {images.map((img, index) => (
          <img 
            key={index}
            src={img}
            alt=""
          />
        ))}

        {images.map((img, index) => (
          <img 
            key={`duplicate-${index}`}
            src={img}
            alt=""
          />
        ))}

      </div>
    </div>
  );
}