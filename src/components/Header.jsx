import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='teal'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          Meal
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a
              href='https://github.com/anderboom/react-food'
              target='_blank'
              rel='noreferrer'
            >
              Repozitory
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
