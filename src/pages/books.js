import Book from '../components/book';
import AddBookForm from '../components/add_book_form';

const Books = () => {
  const Books = [
    {
      id: 1,
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      id: 2,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
    },
    {
      id: 3,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
    },
    {
      id: 4,
      title: 'The Silmarillion',
      author: 'J.R.R. Tolkien',
    },
  ];
  return (
    <div className="books-page">
      <ul className="books-list">
        {Books.map((book) => (
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
