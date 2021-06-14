import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import actions from '../actions/index';

const BooksList = () => {
  const list = useSelector((state) => state.books.list);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(actions.removeBook(book));
  };

  const row = list.map((book) => (
    <Book key={book.id} book={book} handleClick={handleRemoveBook} />
  ));

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {row}
        </tbody>
      </table>
    </>
  );
};

export default BooksList;
