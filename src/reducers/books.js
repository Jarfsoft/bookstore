import actions from '../actions/index';

const stateDefault = {
  list: [],
};

export const fetchApi = () => async (dispatch) => {
  const books = await fetch('https://bookstore-api31.herokuapp.com/books').then((res) => res.json());
  dispatch(actions.show(books.data));
};

export const postApi = (newBook) => async () => {
  await fetch('https://bookstore-api31.herokuapp.com/books', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newBook),
  });
};

export const deleteApi = (id) => async () => {
  await fetch(`https://bookstore-api31.herokuapp.com/books/${id}`, { method: 'DELETE' });
};

export const books = (state = stateDefault, action) => {
  let newState;
  let newList;
  switch (action.type) {
    case 'SHOW_BOOKS':
      newState = { ...state, list: action.payload };
      return newState;
    case 'CREATE_BOOK':
      newState = { ...state, list: [...state.list, action.payload] };
      return newState;
    case 'REMOVE_BOOK':
      newList = state.list.filter((item) => item.id !== action.payload.id);
      newState = { ...state, list: newList };
      return newState;
    default:
      return state;
  }
};
