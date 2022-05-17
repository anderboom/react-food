import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='page-footer teal'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright
          <Link
            className='grey-text text-lighten-4 right'
            to='https://github.com/anderboom/react-shop'
            target='_blank'
            rel='noopener noreferrer'
          >
            Repozitory
          </Link>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
