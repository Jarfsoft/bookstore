const stateDefault = {
  list: [
    { bookID: 1, title: 'Book1', category: 'Fiction' },
    { bookID: 2, title: 'Book2', category: 'Fiction' },
    { bookID: 3, title: 'Book3', category: 'Fiction' },
  ],
};

const books = (state = stateDefault, action) => {
  switch (action.type) {
    case 'SOMETHING':
      return state;
      // break;
    default:
      return state;
  }
};

export default books;
