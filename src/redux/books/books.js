import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/S8O9HgKmzvIzxtQkoPBR/books';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const ADD_BOOK = 'bookstore/books/ADD_BOOKS';

const bookReducer = (state = {}, action) => {
  switch (action.type) {
    case `${FETCH_BOOKS}/fulfilled`:
      return { ...state, ...action.payload };
    case `${ADD_BOOK}/fulfilled`:
      return { ...state, [action.payload.item_id]: [action.payload] };
    case `${REMOVE_BOOK}/fulfilled`:
    /* make a copy of the state object and filter out
    the book with the id that matches the action.payload */
      return Object.keys(state).reduce((acc, key) => {
        if (key !== action.payload) {
          acc[key] = state[key];
        }
        return acc;
      },
      {});
    default:
      return state;
  }
};

const fetchBooks = createAsyncThunk(FETCH_BOOKS, async () => {
  const response = await axios.get(BASE_API_URL);
  return response.data;
});

const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await axios.post(BASE_API_URL, book);
  return book;
});

const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`${BASE_API_URL}/${id}`);
  return id;
});

export { addBook, removeBook, fetchBooks };
export default bookReducer;
