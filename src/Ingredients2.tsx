import { useEffect, useRef } from "react";

import chiaSeed from "./assets/ingredients/chia-seed.png";
import curryLeaf from "./assets/ingredients/curry-leaf.png";
import coconutMilk from "./assets/ingredients/coconut-milk.png";
import margarine from "./assets/ingredients/butter.png";
import carromSeed from "./assets/ingredients/carrom-seed.png";
import flour from "./assets/ingredients/flour.png";
import chickpea from "./assets/ingredients/chickpea-flour.png";
import moringa from "./assets/ingredients/moringa-powder.png";
import mungBean from "./assets/ingredients/mung-bean.png";
import uradDhal from "./assets/ingredients/urad-dhal.png";
import salt from "./assets/ingredients/salt.png";

import "./Ingredients2.css";

type Ingredient = {
    name: string;
    image: string;
    description: string;
};

const ingredients: Ingredient[] = [
    {
        name: "Chickpea Flour",
        image: chickpea,
        description: "A protein-rich alternative for baking and cooking.",
    },
    {
        name: "Moringa Powder",
        image: moringa,
        description: "Packed with nutrients and antioxidants.",
    },
    {
        name: "Urad Dhal",
        image: uradDhal,
        description: "A key ingredient in many traditional dishes.",
    },
    {
        name: "Salt",
        image: salt,
        description: "An essential seasoning for enhancing flavour.",
    },
    {
        name: "Flour",
        image: flour,
        description: "A versatile ingredient for baking and cooking.",
    },
];

const ingredients2: Ingredient[] = [
    {
        name: "Curry Leaves",
        image: curryLeaf,
        description: "Aromatic leaves that add a distinctive flavour.",
    },
    {
        name: "Coconut Milk",
        image: coconutMilk,
        description: "Creamy coconut goodness for a rich flavour.",
    },
    {
        name: "Margarine",
        image: margarine,
        description: "Adds a smooth and rich finishing touch.",
    },
    {
        name: "Carrom Seeds",
        image: carromSeed,
        description: "Adds a unique, nutty flavour to dishes.",
    },
    {
        name: "Mung Bean",
        image: mungBean,
        description: "A staple legume, rich in protein and fibre.",
    },
    {
        name: "Chia Seeds",
        image: chiaSeed,
        description: "Rich in fibre and naturally nutritious.",
    },
];

function Ingredients2() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add("ingredients-visible");
                } else {
                    section.classList.remove("ingredients-visible");
                }
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="ingredients"
            className="ingredients-container"
        >

            {/* Background glow */}
            <div className="ingredients-glow glow-one" />
            <div className="ingredients-glow glow-two" />

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="title-box">

                <span className="section-label">
                    WHAT'S INSIDE
                </span>

                <h1>
                    NATURAL
                    <span> SELECTION</span>
                </h1>

                <p className="section-description">
                    Carefully selected ingredients that bring
                    natural goodness into every bite.
                </p>

            </div>


            {/* =================================================
                INGREDIENT SHOWCASE
            ================================================= */}

            <div className="ingredient-wrapper">

                {/* GROUP ONE */}

                <div className="ingredient-group group-one">

                    {ingredients.map((ingredient, index) => (
                        <div
                            key={ingredient.name}
                            className="ingredient-cell"
                        >
                            <img
                                src={ingredient.image}
                                alt={ingredient.name}
                            />

                            <div className="ingredient-overlay">

                                <span className="ingredient-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div className="ingredient-info">

                                    <h2>
                                        {ingredient.name}
                                    </h2>

                                    <p>
                                        {ingredient.description}
                                    </p>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>


                {/* GROUP TWO */}

                <div className="ingredient-group group-two">

                    {ingredients2.map((ingredient, index) => (
                        <div
                            key={ingredient.name}
                            className="ingredient-cell"
                        >
                            <img
                                src={ingredient.image}
                                alt={ingredient.name}
                            />

                            <div className="ingredient-overlay">

                                <span className="ingredient-number">
                                    {String(index + 6).padStart(2, "0")}
                                </span>

                                <div className="ingredient-info">

                                    <h2>
                                        {ingredient.name}
                                    </h2>

                                    <p>
                                        {ingredient.description}
                                    </p>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </div>


            {/* =================================================
                FOOTER
            ================================================= */}

            <div className="ingredient-footer">

                <span>
                    11 NATURAL INGREDIENTS
                </span>

                <div className="footer-line" />

                <span>
                    MORI MUNG
                </span>

            </div>

        </section>
    );
}

export default Ingredients2;