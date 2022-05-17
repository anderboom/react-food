import {
  useEffect,
  useState,
} from 'react';

import {
  useNavigate,
  useParams,
} from 'react-router-dom';

import { getFilteredCAtegory } from '../api';
import { MealList } from '../components/MealList';
import { Preloader } from '../components/Preloader';

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  useEffect(() => {
    getFilteredCAtegory(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);

  return (
    <>
      <button className='btn' onClick={goBack}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export { Category };
