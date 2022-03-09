import classes from "./CheckOut.module.css";
import { useRef } from "react";

const CheckOut = (props) => {
  const nameInput = useRef();
  const streetInput = useRef();
  const postalCodeInput = useRef();
  const cityInput = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const entedredName = nameInput.current.value;
    const entedredStreet = streetInput.current.value;
    const entedredPostalCode = postalCodeInput.current.value;
    const entedredCity = cityInput.current.value;

  };

  return (
    <>
      <form onSubmit={confirmHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Your Name</label>
          <input ref={nameInput} type="text" id="name" />
        </div>
        <div className={classes.control}>
          <label htmlFor="street">Your Street</label>
          <input ref={streetInput} type="text" id="street" />
        </div>
        <div className={classes.control}>
          <label htmlFor="postal">Postal Code</label>
          <input ref={postalCodeInput} type="text" id="postal" />
        </div>
        <div className={classes.control}>
          <label htmlFor="city">Your City</label>
          <input ref={cityInput} type="text" id="city" />
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
    </>
  );
};

export default CheckOut;
