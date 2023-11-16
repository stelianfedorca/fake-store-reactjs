import axios from 'axios';

import { call, all, put, takeEvery, fork } from 'redux-saga/effects';

import { FETCH_PRODUCTS } from '../constants';
import { fetchProductsFail, fetchProductsSuccess } from './actions';

async function fetchProductsApiCall() {
  console.log('fetchproductsapicall');
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
}

export function* fetchProducts() {
  try {
    const response = yield call(fetchProductsApiCall);

    // `put` creates an effect that instructs the middleware to schedule the dispatching of an action to the store
    yield put(fetchProductsSuccess(response));
  } catch (error) {
    console.error(error);
    yield put(fetchProductsFail());
  }
}

// generator function for listening for every `FETCH_PRODUCTS` action using `takeLatest` effect
// when the `FETCH_PRODUCTS` action is dispatched, it intercepts it and calls the `fetchProducts` function
function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}

function* watchTest() {}

export default function* rootSaga() {
  yield all([fork(watchFetchProducts), fork(watchTest)]);
}
