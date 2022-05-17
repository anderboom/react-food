import {
  useEffect,
  useState,
} from 'react';

import { getAllCAtegories } from '../api';
import { CategoryList } from '../components/CategoryList';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

function Home() {
  const [categories, setCategories] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const handleSearch = (str) => {
    setFilteredCatalog(
      categories.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getAllCAtegories().then((data) => {
      setCategories(data.categories);
      setFilteredCatalog(data.categories);
    });
  }, []);
  return (
    <>
      <Search cb={handleSearch} />
      {!categories.length ? (
        <Preloader />
      ) : (
        <CategoryList categories={filteredCatalog} />
      )}
    </>
  );
}

export { Home };
