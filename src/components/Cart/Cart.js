import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = ({onClose}) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[
        {
          id: "m1",
          name: "Sushi",
          description: "Finest fish and veggies",
          price: 22.99,
        },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <>
      <Modal onClose={onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>22.99</span>
        </div>
        <div className={classes.actions}>
            <button onClick={onClose} className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
            </div>
      </Modal>
    </>
  );
};

export default Cart;
