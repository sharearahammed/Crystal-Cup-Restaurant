import PropTypes from "prop-types";

const Cart = ({ index, cart, handleCurrentCart }) => {
  const { recipe_name, preparing_time, calories, recipe_id } = cart;
  //   const {idx} = index;
  return (
    <>
      <tr className="bg-[#28282808] flex mt-3 justify-between items-center mb-[40px] text-[#282828B3] gap-8">
        {index + 1}.
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td>
          <button
            onClick={() => handleCurrentCart(cart, recipe_id)}
            className="btn bg-[#0BE58A] rounded-full"
          >
            Preparing
          </button>
        </td>
      </tr>
    </>
  );
};
Cart.propTypes = {
  carts: PropTypes.object.isRequired,
  index: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  handleCurrentCart: PropTypes.func.isRequired,
};

export default Cart;
