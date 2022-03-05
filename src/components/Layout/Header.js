import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>ReactMeals</h1>
          <button>Cart</button>
        </div>
        <div className={classes["main-image"]}>
          <img src={mealsImage} alt="MealsImage" />
        </div>
      </div>
    </>
  );
};

export default Header;
