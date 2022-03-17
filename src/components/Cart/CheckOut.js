import classes from "./CheckOut.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const is5Chars = (value) => value.trim().length === 5;

const CheckOut = (props) => {
  const [formInputIsValidity, setFormInputIsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInput = useRef();
  const streetInput = useRef();
  const postalCodeInput = useRef();
  const cityInput = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInput.current.value;
    const enteredStreet = streetInput.current.value;
    const enteredPostalCode = postalCodeInput.current.value;
    const enteredCity = cityInput.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = is5Chars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputIsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    } 

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode
    }); 
  };

  const nameControlClasses = `${classes.control} ${
    formInputIsValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputIsValidity.street ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputIsValidity.city ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputIsValidity.postalCode ? "" : classes.invalid
  }`;

  return (
    <>
      <form onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
          <label htmlFor="name">Your Name</label>
          <input ref={nameInput} type="text" id="name" />
          {!formInputIsValidity.name && <p>Please Enter Name</p>}
        </div>
        <div className={streetControlClasses}>
          <label htmlFor="street">Your Street</label>
          <input ref={streetInput} type="text" id="street" />
          {!formInputIsValidity.street && <p>Please Enter Street</p>}
        </div>
        <div className={postalCodeControlClasses}>
          <label htmlFor="postal">Postal Code</label>
          <input ref={postalCodeInput} type="text" id="postal" />
          {!formInputIsValidity.postalCode && (
            <p>Please Enter Postal Code (5 characters)</p>
          )}
        </div>
        <div className={cityControlClasses}>
          <label htmlFor="city">Your City</label>
          <input ref={cityInput} type="text" id="city" />
          {!formInputIsValidity.city && <p>Please Enter City</p>}
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
