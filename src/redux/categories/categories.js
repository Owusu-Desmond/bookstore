const checkStatus = () => ({
  type: 'CHECK_STATUS',
  payload: {
    status: 'online',
  },
});

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return 'Under construction';
    default:
      return state;
  }
};

export { checkStatus };
export default categoriesReducer;
