import {
  Route,
  Routes,
} from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Category } from './pages/Category';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Recipe } from './pages/Recipe';

function App() {
  return (
    <>
      <Header />
      <main className='container content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/category/:name' element={<Category />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/meal/:id' element={<Recipe />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
