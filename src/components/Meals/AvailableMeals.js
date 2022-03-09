import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-complete-guide-6101-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        setError(true);
      }
      const data = await response.json();

      const loadMeals = [];

      for (const key in data) {
        loadMeals.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
          description: data[key].description,
        });
      }

      setMeals(loadMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);
  const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className={classes.MealsError}>
        <p>{isError}</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
