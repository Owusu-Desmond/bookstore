const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return [...state, action.payload];
    default:
      return state;
  }
};

const addBook = () => ({
  type: 'ADD_BOOK',
  payload: {
    title: 'Harry Potter',
  },
});

const removeBook = () => ({
  type: '',
  payload: {
    title: 'Harry Potter',
  },
});

export { addBook, removeBook };
export default bookReducer;
