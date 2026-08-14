import { useState } from "react";
import "./Ingredients.css";
import HeadingText from "./components/headingText";

import chiaSeed from "./assets/ingredients/chia-seed.png";
import curryLeaf from "./assets/ingredients/curry-leaf.png";
import coconutMilk from "./assets/ingredients/coconut-milk.png";
import butter from "./assets/ingredients/butter.png"
import bg from "./assets/background/stripes.png";

const ingredients = [
    {
        name: "Chia Seeds",
        image: chiaSeed,
    },
    {
        name: "Curry Leaves",
        image: curryLeaf,
    },
    {
        name: "Coconut Milk",
        image: coconutMilk,
    },
    {
        name: "Butter",
        image: butter,
    }
];

function Ingredients() {
    const [current, setCurrent] = useState(0);

    const nextIngredient = () => {
        setCurrent((prev) => (prev + 1) % ingredients.length);
    };

    const previousIngredient = () => {
        setCurrent((prev) => (prev - 1 + ingredients.length) % ingredients.length);
    };

    const getIndex = (offset: number) => {
        return (current + offset + ingredients.length) % ingredients.length;
    };

    return (
        <div
            className="ingredients-container"
            style ={{backgroundImage: `url(${bg})`}}            
        >
            <div className="box">
                <HeadingText text="Ingredients" />
            </div>
            

            <div className="carousel">
                <div className="ingredient-side">
                    <img
                        src={ingredients[getIndex(-1)].image}
                        alt={ingredients[getIndex(-1)].name}
                    />
                </div>

                <button
                    className="arrow"
                    onClick={previousIngredient}
                    aria-label="Previous Ingredient"
                >
                    ←
                </button>

                <div className="ingredient-main">
                    <img
                        key={`img-${current}`}
                        src={ingredients[current].image}
                        alt={ingredients[current].name}
                    />
                    {/* <h2 key={`text-${current}`}>
                        {ingredients[current].name}
                    </h2>*/}
                    
                </div>

                <button
                    className="arrow"
                    onClick={nextIngredient}
                    aria-label="Next Ingredient"
                >
                    →
                </button>

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