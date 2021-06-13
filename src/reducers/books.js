import actions from '../actions/index';
// import { useDispatch } from 'react-redux';

const stateDefault = {
  list: [
    { id: Math.floor(Math.random() * 100), title: 'Book1', category: 'action' },
    { id: Math.floor(Math.random() * 100), title: 'Book2', category: 'action' },
    { id: Math.floor(Math.random() * 100), title: 'Book3', category: 'action' },
  ],
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

export const fetchApi = () => async (dispatch) => {
  const books = await fetch('https://bookstore-api31.herokuapp.com/books').then((res) => res.json());
  dispatch(actions.show(books.data));
  // console.log(books);
};

// const dispatch = useDispatch();

// <button type="button" onClick={dispatch(fetchApi())}>Load Books</button>

// export default { books, fetchApi };

// export default books;
