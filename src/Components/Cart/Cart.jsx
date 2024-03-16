import PropTypes from 'prop-types';

const Cart = ({cart}) => {
    const {recipe_name,preparing_time,calories} = cart;
    return (
        <div className="bg-[#28282808] px-[24px] py-[15px] flex justify-between items-center lg:items-baseline flex-col lg:flex-row">
            <div className="flex mt-3 justify-between items-center mb-[40px] text-[#282828B3] gap-8">
                <p>{recipe_name}</p>
                <p>{preparing_time}</p>
                <p>{calories}</p>
            </div>
            <div><button className="btn bg-[#0BE58A] rounded-full">Preparing</button></div>
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.object.isRequired
}

export default Cart;