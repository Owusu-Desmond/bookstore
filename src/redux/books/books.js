import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const books = [
  {
    id: uuidv4(),
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    id: uuidv4(),
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
  },
  {
    id: uuidv4(),
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
  },
  {
    id: uuidv4(),
    title: 'The Silmarillion',
    author: 'J.R.R. Tolkien',
  },
];

const bookReducer = (state = books, action) => {
  const index = state.findIndex((book) => book.id === action.id);

  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
};

const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export { addBook, removeBook };
export default bookReducer;
