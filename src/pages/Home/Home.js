import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Item } from '../../components/Item';
import { FETCH_PRODUCTS } from '../../constants';
import { setSearchFilter } from '../../redux/actions';

import './Home.css';

export function Home() {
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
    let timeout;

    // this function will be the debounced version of the original one
    // it takes any number of arguments using rest paramter syntax
    return function (...args) {
      // captures the value of `this` in the current context
      // it preserves the context, ensuring that the debounced function is going to use the same `this` value
      // as the context in which it was created
      const context = this;

      // clear any existing timeout to prevent the original function from being called
      // if the debounced function is invoked again within the specified delay.
      clearTimeout(timeout);

      timeout = setTimeout(() => {
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

  return (
    <div className="container">
      <header>
        <input
          placeholder="Search"
          onChange={debouncedSearch}
          className="input"
        />
      </header>

      <main className="list">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {products.filter(filterProduct).map(data => (
              <li key={data.id + Math.random()}>
                <Item id={data.id} title={data.title} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
