import { Link } from 'react-router-dom';

function Meal(props) {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className='card-content'>
        <span className='card-title blue-text'>{strMeal}</span>
      </div>
      <div className='card-action center'>
        <Link to={`/meal/${idMeal}`} className='btn'>
          See the recipe
        </Link>
      </div>
    </div>
  );
}

export { Meal };
