import actions from '../actions/index';

const stateDefault = {
  list: [],
};

export const fetchApi = () => async (dispatch) => {
  const books = await fetch('https://bookstore-api31.herokuapp.com/books').then((res) => res.json());
  dispatch(actions.show(books.data));
};

export const postApi = (newBook) => async (dispatch) => {
  const book = await fetch('https://bookstore-api31.herokuapp.com/books', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newBook),
  }).then((res) => res.json());
  dispatch(actions.addBook(book.data));
};

export const deleteApi = (id) => async (dispatch) => {
  await fetch(`https://bookstore-api31.herokuapp.com/books/${id}`, { method: 'DELETE' });
  dispatch(actions.removeBook(id));
};

export const books = (state = stateDefault, { type, payload }) => {
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
