import PropTypes from "prop-types";

const CurrentCookingCart = ({ current, index }) => {
  const { recipe_name, preparing_time, calories } = current;
  return (
    <>
      <tr className="bg-[#28282808] flex mt-3 justify-between items-center mb-[40px] text-[#282828B3] gap-8">
        {index + 1}.
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td></td>
      </tr>
    </>
  );
};
CurrentCookingCart.propTypes = {
  current: PropTypes.object.isRequired,
  index: PropTypes.object.isRequired,
};

export default CurrentCookingCart;
