import PropTypes from "prop-types";
import classes from "./BurgerIngredient.module.css";

const BurgerIngredient = (props) => {
  let ingrdient = null;
  switch (props.type) {
    case "bread-bottom":
      ingrdient = <div className={classes.BreadBottom}></div>;
      break;
    case "bread-top":
      ingrdient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingrdient = <div className={classes.Meat}></div>;
      break;
    case "cheese":
      ingrdient = <div className={classes.Cheese}></div>;
      break;
    case "salad":
      ingrdient = <div className={classes.Salad}></div>;
      break;
    case "bacon":
      ingrdient = <div className={classes.Bacon}></div>;
      break;
    default:
      ingrdient = null;
      break;
  }
  return ingrdient;
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
