import PropTypes from "prop-types";

const Ingredient = ({ ingredient }) => {
  return (
    <div>
      <li className="text-[#878787]">{ingredient}</li>
    </div>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.string.isRequired,
};
export default Ingredient;
