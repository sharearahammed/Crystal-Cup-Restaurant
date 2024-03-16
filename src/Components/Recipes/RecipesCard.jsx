import Ingredient from "./Ingredient";
import { FaRegClock } from "react-icons/fa6";
import { FaFireFlameCurved } from "react-icons/fa6";
import PropTypes from 'prop-types';

const RecipesCard = ({recipe,handleCart}) => {
    const {recipe_name,recipe_image,short_description,ingredients,preparing_time,calories} = recipe;
    return (
        <div>
            <div className="card lg:w-96 bg-base-100 shadow-xl border-2 border-b-slate-700 p-5">
                <figure><img className="lg:h-[200px] lg:w-[331px] rounded-lg" src={recipe_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title mb-[16px]">{recipe_name}</h2>
                    <p className="text-[#878787]">{short_description}</p>
                    <hr className="mt-[24px]"/>
                    <div className="">
                        <h3 className="text-[18px] text-[#282828] font-semibold mb-[16px]">Ingredients: 4</h3>
                        <h3>
                            {
                            ingredients.map((ingredient , idx) => <Ingredient key={idx} ingredient={ingredient}></Ingredient>)
                            }
                        </h3>
                    </div>
                    <hr className="mt-[24px]"/>
                    <div className="flex justify-start items-center text-[#282828CC] mt-[24px]">
                        <div className="flex items-center mr-[16px]">
                        <FaRegClock />
                        <p className="ml-[8px]">{preparing_time}</p>
                        </div>
                        <div className="flex items-center">
                        <FaFireFlameCurved />
                        <p className="ml-[8px]">{calories}</p>
                        </div>
                    </div>
                    <div className= "justify-start mt-[24px]">
                        <button onClick={()=>handleCart(recipe)} className="btn btn-primary bg-[#0BE58A] border-2 border-[#0BE58A] text-[#150B2B]">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

RecipesCard.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleCart: PropTypes.func.isRequired
}

export default RecipesCard;