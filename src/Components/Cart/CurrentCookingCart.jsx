import PropTypes from 'prop-types';

const CurrentCookingCart = ({current}) => {
    const {recipe_name,preparing_time,calories} = current;
    return (
        
            <div className="bg-[#28282808] py-[15px] flex justify-between items-center lg:items-baseline flex-col lg:flex-row">
            <div className="flex mt-3 justify-between items-center mb-[40px] text-[#282828B3] gap-8">
                <p>{recipe_name}</p>
                <p>{preparing_time}</p>
                <p>{calories}</p>
            </div>
        </div>
        
    );
};
CurrentCookingCart.propTypes = {
    current: PropTypes.object.isRequired
}

export default CurrentCookingCart;