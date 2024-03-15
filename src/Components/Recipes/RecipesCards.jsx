import { useState } from "react";
import RecipesCard from "./RecipesCard";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const RecipesCards = ({handleCart}) => {
    const [recipes , setRecipes] = useState([]);
    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-3 gap-5">
            {
                recipes.map(recipe => <RecipesCard key={recipe.recipe_id}
                    recipe={recipe}
                    recipes={recipes}
                    handleCart={handleCart}></RecipesCard>)
            }
            
        </div>
    );
};


RecipesCards.propTypes = {
    handleCart: PropTypes.func.isRequired
}

export default RecipesCards;