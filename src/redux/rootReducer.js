import { combineReducers } from "redux";

import productsReducer from './reducers/productsReducer'

const rootReducer = combineReducers({
  productsReducer: productsReducer
});

export default rootReducer;