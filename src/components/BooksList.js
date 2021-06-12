import React from 'react';

import { useSelector } from 'react-redux';
import Book from './Book';
import './BookList.css';

const BooksList = () => {
  const list = useSelector((state) => state.books.list);

  const row = list.map((book) => (
    <Book key={book.id} book={book} />
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
