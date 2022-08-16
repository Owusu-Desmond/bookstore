import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/book';
import AddBookForm from '../components/add_book_form';

const Books = () => {
  const books = useSelector((state) => state.books); // access the store state
  return (
    <div className="books-page">
      <ul className="books-list">
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </ul>
      <h2>ADD NEW BOOK</h2>
      <AddBookForm />
    </div>
  );
};

export default Books;
