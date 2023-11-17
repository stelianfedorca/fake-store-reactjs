import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Item } from '../../components/Item';
import { FETCH_PRODUCTS } from '../../constants';
import { setSearchFilter, setSelectedProduct } from '../../redux/actions';

import './Home.css';

export function Home() {
  const [selectedSortOption, setSelectedSortOption] = useState(0);

  // redux-saga hook for connecting the component with the store
  // it provides a way for component to subscribe to redux store and read data from it
  // the component re-renders every time the state changes
  const products = useSelector(state => state.productsReducer.products);
  const isLoading = useSelector(state => state.productsReducer.isLoading);
  const searchFilter = useSelector(state => state.productsReducer.searchFilter);

  // redux-saga hook used for dispatching an action to the store
  const dispatch = useDispatch();

  const debouncedSearch = debounce(handleSearch, 500);

  useEffect(() => {
    dispatch({ type: FETCH_PRODUCTS });
  }, [dispatch]);

  // custom debounce function
  function debounce(callback, wait) {
    let timeoutId;

    // this function will be the debounced version of the original one
    // it takes any number of arguments using rest paramter syntax
    return function (...args) {
      // captures the value of `this` in the current context
      // it preserves the context, ensuring that the debounced function is going to use the same `this` value
      // as the context in which it was created
      const context = this;

      // clear any existing timeout to prevent the original function from being called
      // if the debounced function is invoked again within the specified delay.
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        callback.apply(context, args);
      }, wait);
    };
  }

  function handleSearch(event) {
    dispatch(setSearchFilter(event.target.value));
  }

  function filterProduct(product) {
    if (searchFilter === '') return product;
    return product.title.toLowerCase().includes(searchFilter.toLowerCase());
  }

  function handleOptionChange(event) {
    const option = event.target.value;
    setSelectedSortOption(option);
  }

  function handleShowDetails(id) {
    dispatch(setSelectedProduct(id));
  }

  return (
    <div className="container">
      <header>
        <input
          placeholder="Search"
          onChange={debouncedSearch}
          className="input"
        />

        <select
          value={selectedSortOption}
          onChange={handleOptionChange}
          name="price"
          id="price"
          className="dropdown-sort-price"
        >
          <option value={1} va>
            Ascending
          </option>
          <option value={2}>Descending</option>
          <option value={0}>Default</option>
        </select>
      </header>

      <main className="list">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {products.filter(filterProduct).map(data => (
              <li key={data.id + Math.random()}>
                <Item {...data} onShowDetails={handleShowDetails} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
