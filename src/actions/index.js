const actions = {
  addBook: (newBook) => ({
    type: 'CREATE_BOOK',
    payload: newBook,
  }),
  removeBook: (newBook) => ({
    type: 'REMOVE_BOOK',
    payload: newBook,
  }),
};

export default actions;
