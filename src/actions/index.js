export const actions = {
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
