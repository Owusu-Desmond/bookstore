import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch(); // access the store dispatch function

  const clearForm = (e) => {
    e.preventDefault();
    e.target.elements.title.value = '';
    e.target.elements.author.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuidv4(),
      title: e.target.elements.title.value,
      author: e.target.elements.author.value,
      category: '',
    };
    dispatch(addBook(book)); // dispatch action to add book to store
    clearForm(e);
  };

  return (
    <form className="add-book-form" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Book title" />
      <input type="text" name="author" placeholder="Author" />
      <input type="submit" value="Add BOOK" />
    </form>
  );
};

export default AddBookForm;
