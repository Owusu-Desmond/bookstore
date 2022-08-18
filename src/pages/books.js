import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/book';
import { fetchBooks } from '../redux/books/books';
import AddBookForm from '../components/add_book_form';

const Books = () => {
  const books = useSelector((state) => state.books); // access the store state

  const booksIds = Object.keys(books); // convert the object to an array
  const dispatch = useDispatch(); // access the store dispatch function
  useEffect(() => {
    dispatch(fetchBooks());
  }, []); // only fetch books when the books array is empty

  return (
    <div className="books-page">
      <ul className="books-list">
        {booksIds.map((bookId) => (
          <li key={bookId}>
            <Book book={books[bookId]} id={bookId} />
          </li>
        ))}
      </ul>
      <h2>ADD NEW BOOK</h2>
      <AddBookForm />
    </div>
  );
};

export default Books;
