const stateDefault = {
  list: [
    { id: Math.floor(Math.random() * 100), title: 'Book1', category: 'Fiction' },
    { id: Math.floor(Math.random() * 100), title: 'Book2', category: 'Fiction' },
    { id: Math.floor(Math.random() * 100), title: 'Book3', category: 'Fiction' },
  ],
};
/* eslint-disable no-case-declarations */
const books = (state = stateDefault, action) => {
  let newState;
  switch (action.type) {
    case 'CREATE_BOOK':
      newState = { ...state, list: [...state.list, action.payload] };
      return newState;
    case 'REMOVE_BOOK':
      const newList = state.list.filter((item) => item.id !== action.payload.id);
      newState = { ...state, list: newList };
      return newState;
    default:
      return state;
  }
};

export default books;
/* eslint-enable no-case-declarations */
