const stateDefault = {
  list: [
    { id: 1, title: 'Book1', category: 'Fiction' },
    { id: 2, title: 'Book2', category: 'Fiction' },
    { id: 3, title: 'Book3', category: 'Fiction' },
  ],
};
/* eslint-disable no-case-declarations */
const books = (state = stateDefault, action) => {
  switch (action.type) {
    case 'ADD':
      const newState = { ...state, list: [...state.list, action.payload] };
      return newState;
    default:
      return state;
  }
};

export default books;
/* eslint-enable no-case-declarations */
