const actions = {
  addBook: (newBook) => ({
    type: 'CREATE_BOOK',
    payload: newBook,
  }),
  removeBook: (newBook) => ({
    type: 'REMOVE_BOOK',
    payload: newBook,
  }),
  filter: (category) => ({
    type: 'CHANGE_FILTER',
    payload: category,
  }),
};

export default actions;
