import PropTypes from "prop-types";

const Cart = ({ index, cart, handleCurrentCart }) => {
  const { recipe_name, preparing_time, calories, recipe_id } = cart;

  //   const {idx} = index;
  return (
    <>
      <tr className="bg-[#28282808] flex mt-3 justify-between items-center mb-[40px] text-[#282828B3] lg:gap-8 p-9">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          <div className="flex items-center text-[12px] md:text-[16px] lg:text-[16px] gap-2">
            <td>{index + 1}.</td>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
          </div>
          <div>
            <td>
              <button
                onClick={() => handleCurrentCart(cart, recipe_id)}
                className="btn bg-[#0BE58A] rounded-full text-[12px] lg:text-[16px]"
              >
                Preparing
              </button>
            </td>
          </div>
        </div>
      </tr>
    </>
  );
};
Cart.propTypes = {
  carts: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  cart: PropTypes.object.isRequired,
  handleCurrentCart: PropTypes.func.isRequired,
};

export default Cart;
