import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";

const Cart = ({ onClose }) => {
  const [isCheckOut, setIsCheckOut] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const OrderHandler = () => {
    setIsCheckOut(true);
  };

  const submitOrderHandler = (userData) => {
    fetch('https://react-complete-guide-6101-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',{
      method: 'POST',
      body: JSON.stringify({
        user:userData,
        orderedItems: cartCtx.items
      })
    })
  }

  const modelActions = (
    <div className={classes.actions}>
      <button onClick={onClose} className={classes["button--alt"]}>
        Close
      </button>
      {hasItem && (
        <button className={classes.button} onClick={OrderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
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
        {isCheckOut && <CheckOut onConfirm={submitOrderHandler} onCancel={onClose} />}
        {!isCheckOut && modelActions}
      </Modal>
    </>
  );
};

export default Cart;
