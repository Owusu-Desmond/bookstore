import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';
// Combine both reducers into a root reducer by using configureStore function.

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

export default () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
};
