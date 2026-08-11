import { useState } from "react";
import "./Ingredients.css";
import HeadingText from "./components/headingText";

import chiaSeed from "./assets/ingredients/chia-seed.png";
import curryLeaf from "./assets/ingredients/curry-leaf.png";
import coconutMilk from "./assets/ingredients/coconut-milk.png";
import bg from "./assets/bg.png";

const ingredients = [
    {
        name: "Chia Seeds",
        image: chiaSeed
    },
    {
        name: "Curry Leaves",
        image: curryLeaf
    },
    {
        name: "Coconut Milk",
        image: coconutMilk
    },
];

function Ingredients() {
    const [current, setCurrent] = useState(0);

    const nextIngredient = () => {
        setCurrent((prev) => (prev + 1) % ingredients.length);
    };

    const previousIngredient = () => {
        setCurrent((prev) => (prev - 1 + ingredients.length) % ingredients.length);
    };

    // Removed the TypeScript ": number" artifact
    const getIndex = (offset: number) => {
        return (current + offset + ingredients.length) % ingredients.length;
    };

    return (
        <div
            className="ingredients-container"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <HeadingText text="Ingredients" />

            <div className="carousel">
                {/* Left Blurred Image */}
                <div className="ingredient-side">
                    <img 
                        src={ingredients[getIndex(-1)].image}
                        alt={ingredients[getIndex(-1)].name}
                    />
                </div>

                {/* Left Button */}
                <button 
                    className="arrow left"
                    onClick={previousIngredient}
                    aria-label="Previous Ingredient"
                >
                    &lt;
                </button>

                {/* Center Active Image */}
                <div className="ingredient-main">
                    <img 
                        key={`img-${current}`} // The key forces the fadeIn animation to replay
                        src={ingredients[current].image}
                        alt={ingredients[current].name}
                    />
                    <h2 key={`text-${current}`}>
                        {ingredients[current].name}
                    </h2>
                </div>

                {/* Right Button */}
                <button 
                    className="arrow right"
                    onClick={nextIngredient}
                    aria-label="Next Ingredient"
                >
                    &gt;
                </button>

                {/* Right Blurred Image */}
                <div className="ingredient-side">
                    <img 
                        src={ingredients[getIndex(1)].image}
                        alt={ingredients[getIndex(1)].name}
                    />
                </div>
            </div>
        </div>
    );
}

export default Ingredients;