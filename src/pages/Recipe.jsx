import {
  useEffect,
  useState,
} from 'react';

import {
  useNavigate,
  useParams,
} from 'react-router-dom';

import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();

  const goBack = () => {
    navigate(`/category/${recipe.strCategory}`);
  };
  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);
  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className='recipe'>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h2 className='blue-text'>{recipe.strMeal}</h2>
          <h4>Category: {recipe.strCategory}</h4>
          {recipe.strArea ? <h5>Area: {recipe.strArea}</h5> : null}
          <p>{recipe.strInstructions}</p>
          <table className='centered'>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('strIngredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          {recipe.strYoutube ? (
            <div className='row center'>
              <h4>Video recipe</h4>
              <iframe
                title={recipe.strMeal}
                allowFullScreen
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
              />
            </div>
          ) : null}
        </div>
      )}
      <button className='go-back-btn' onClick={goBack}></button>
    </>
  );
}

export { Recipe };
