import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book, id } = props;
  const handleRemove = () => { // remove book from store
    dispatch(removeBook(id));
  };
  return (
    <div className="book">
      <div className="book-title">{book[0].title}</div>
      <div className="book-author">{book[0].author}</div>
      <button type="button" onClick={() => handleRemove(id)}>remove</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
