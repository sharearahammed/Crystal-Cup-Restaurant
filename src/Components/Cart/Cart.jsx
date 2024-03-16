import PropTypes from 'prop-types';

const Cart = ({cart,handleCurrentCart}) => {
    const {recipe_name,preparing_time,calories,recipe_id} = cart;
    return (
        <div className="bg-[#28282808] px-[24px] py-[15px] flex justify-between items-center lg:items-baseline flex-col lg:flex-row">
            <div className="flex mt-3 justify-between items-center mb-[40px] text-[#282828B3] gap-8">
                <p>{recipe_name}</p>
                <p>{preparing_time}</p>
                <p>{calories}</p>
            </div>
            <div><button onClick={() =>handleCurrentCart(cart,recipe_id)} className="btn bg-[#0BE58A] rounded-full">Preparing</button></div>
        </div>
    );
};
Cart.propTypes = {
    carts: PropTypes.object.isRequired,
    cart: PropTypes.object.isRequired,
    handleCurrentCart: PropTypes.func.isRequired,
}

export default Cart;