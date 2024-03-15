import PropTypes from 'prop-types';

const Cart = ({cart}) => {
    const {recipe_name,preparing_time,calories} = cart;
    return (
        <div className="bg-[#28282808] mt-1 px-[24px] py-[15px]">
            <div className="flex justify-between mb-[40px] text-[#282828B3]">
            <p>{recipe_name}</p>
            <p>{preparing_time}</p>
            <p>{calories}</p>
        </div>
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.array.isRequired
}

export default Cart;