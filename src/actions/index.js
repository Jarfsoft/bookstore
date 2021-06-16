const actions = {
  addBook: (newBook) => ({
    type: 'CREATE_BOOK',
    payload: newBook,
  }),
  removeBook: (id) => ({
    type: 'REMOVE_BOOK',
    payload: id,
  }),
  filter: (category) => ({
    type: 'CHANGE_FILTER',
    payload: category,
  }),
  show: (books) => ({
    type: 'SHOW_BOOKS',
    payload: books,
  }),
};

export default actions;
