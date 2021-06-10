import React from 'react';

import { useSelector } from 'react-redux';
import Book from './Book';

// import PropTypes from 'prop-types';

const BooksList = () => {
  const list = useSelector((state) => state.books.list);

  const row = list.map((book) => (
    <Book key={book.id} book={book} />
  ));

  return (
    <div>
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
    </div>
  );
};

// BooksList.propTypes = {

// };

export default BooksList;
