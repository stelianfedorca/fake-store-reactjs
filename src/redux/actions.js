import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
  SET_SEARCH_FILTER,
} from '../constants';

export function fetchProducts() {
  return { type: FETCH_PRODUCTS };
}

export function fetchProductsSuccess(products) {
  return { type: FETCH_PRODUCTS_SUCCESS, payload: products };
}

export function fetchProductsFail() {
  return { type: FETCH_PRODUCTS_FAIL };
}

export function setSearchFilter(search) {
  return { type: SET_SEARCH_FILTER, payload: search };
}
