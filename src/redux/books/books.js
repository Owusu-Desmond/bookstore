import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/S8O9HgKmzvIzxtQkoPBR/books';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

const bookReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

const fetchBooks = () => async (dispatch) => {
  const res = await axios.get(BASE_URL);
  dispatch({ type: FETCH_BOOKS, payload: res.data });
};

const addBook = (book) => async (dispatch) => {
  await axios.post(BASE_URL, book);
  dispatch(fetchBooks());
};

const removeBook = (id) => async (dispatch) => {
  await axios.delete(`${BASE_URL}/${id}`);
  dispatch(fetchBooks());
};

export { addBook, removeBook, fetchBooks };
export default bookReducer;
