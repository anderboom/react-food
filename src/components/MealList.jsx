import { Meal } from './Meal';

function MealList({ meals }) {
  return (
    <div className='categories'>
      {meals.map((meal) => {
        return <Meal key={meal.idMeal} {...meal} />;
      })}
    </div>
  );
}

export { MealList };
