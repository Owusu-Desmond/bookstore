import { createStore, combineReducers } from 'redux-toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';
// Combine both reducers into a root reducer by using configureStore function.

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});

const configureStore = () => {
  const store = createStore(rootReducer);
  return store;
};

export default configureStore;
