import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
  SET_SEARCH_FILTER,
} from '../../constants';

const initialState = {
  products: [],
  isLoading: false,
  searchFilter: '',
  sortingFilter: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return { ...state, isLoading: true };
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: [...state.products, ...action.payload],
        isLoading: false,
      };
    }
    case FETCH_PRODUCTS_FAIL: {
      return { ...state, isLoading: false };
    }
    case SET_SEARCH_FILTER: {
      return { ...state, searchFilter: action.payload };
    }
    default:
      return state;
  }
};

export default rootReducer;
