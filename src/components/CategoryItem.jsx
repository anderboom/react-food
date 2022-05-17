import { Link } from 'react-router-dom';

function CategoryItem(props) {
  const { strCategory, strCategoryDescription, strCategoryThumb } = props;

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className='card-content'>
        <span className='card-title blue-text'>{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 80)}...</p>
      </div>
      <div className='card-action center'>
        <Link to={`/category/${strCategory}`} className='btn'>
          Open category
        </Link>
      </div>
    </div>
  );
}

export { CategoryItem };
