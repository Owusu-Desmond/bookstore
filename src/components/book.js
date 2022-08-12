import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  return (
    <div className="book">
      <div className="book-title">{book.title}</div>
      <div className="book-author">{book.author}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
