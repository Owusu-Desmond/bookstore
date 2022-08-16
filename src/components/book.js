import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  const handleRemove = () => { // remove book from store
    dispatch(removeBook(book.id));
  };
  return (
    <div className="book">
      <div className="book-title">{book.title}</div>
      <div className="book-author">{book.author}</div>
      <button type="button" onClick={() => handleRemove(book.id)}>remove</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
