import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onAdd={cartItemAddHandler.bind(null,item)}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
        />
      ))}
    </ul>
  );
  return (
    <>
      <Modal onClose={onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onClose} className={classes["button--alt"]}>
            Close
          </button>
          {hasItem && <button className={classes.button}>Order</button>}
        </div>
      </Modal>
    </>
  );
};

export default Cart;
