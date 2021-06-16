const stateDefault = {
  list: [],
};

const books = (state = stateDefault, { type, payload }) => {
  let newState;
  let newList;
  switch (type) {
    case 'SHOW_BOOKS':
      newState = { ...state, list: payload };
      return newState;
    case 'CREATE_BOOK':
      newState = { ...state, list: [...state.list, payload] };
      return newState;
    case 'REMOVE_BOOK':
      newList = state.list.filter((item) => item.id !== payload);
      newState = { ...state, list: newList };
      return newState;
    default:
      return state;
  }
};

export default books;
