import PropTypes from 'prop-types';

const Cart = ({cart}) => {
    const {recipe_name,preparing_time,calories} = cart;
    return (
        <div className="bg-[#28282808] mt-1 px-[24px] py-[15px]">
            <div className="flex justify-between mb-[40px] text-[#282828B3] gap-8">
            <div><p>{recipe_name}</p></div>
            <div><p>{preparing_time}</p></div>
            <div><p>{calories}</p></div>
            <div><button className="btn bg-[#0BE58A]">Preparing</button></div>
        </div>
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.object.isRequired
}

export default Cart;