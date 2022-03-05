import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({onShowCart}) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton onClick={onShowCart} />
        </div>
        <div className={classes["main-image"]}>
          <img src={mealsImage} alt="MealsImage" />
        </div>
      </div>
    </>
  );
};

export default Header;
