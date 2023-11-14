import axios from 'axios';
import { useEffect, useState } from 'react';

import { Item } from '../../components/Item';

import './Home.css';

export function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    console.log('calling the api...');
    setIsLoading(true);
    axios.get('https://fakestoreapi.com/products').then(res => {
      setProducts(prev => [...res.data]);
      setIsLoading(false);
    });
  }, []);

  console.log(products);
  function handleSearch(event) {
    setSearchFilter(event.target.value);
  }

  function filterProduct(product) {
    if (searchFilter === '') return product;
    return product.title.toLowerCase().includes(searchFilter.toLowerCase());
  }

  return (
    <div className="container">
      <header>
        <input placeholder="Search" onChange={handleSearch} className="input" />
      </header>

      <main className="list">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {products.filter(filterProduct).map(data => (
              <li>
                <Item id={data.id} title={data.title} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
