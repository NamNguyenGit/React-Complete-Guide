import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";


const MealItem = ({meal}) => {
  
  // const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext)

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price
    })
  }

  return (
    <>
      <li className={classes.meal}>
        <div>
          <h3>{meal.name}</h3>
          <div className={classes.description}>{meal.description}</div>
          <div className={classes.price}><span>$</span>{meal.price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart = {addToCartHandler} />
        </div>
      </li>
    </>
  );
};

export default MealItem;
