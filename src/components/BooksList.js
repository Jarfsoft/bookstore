import React from 'react';

import { useSelector } from 'react-redux';

// import PropTypes from 'prop-types';

const BooksList = () => {
  const list = useSelector((state) => state.books.list);
  console.log(list);
  const row = list.map((book) => (
    <tr key={book.bookID}>
      <td>{book.bookID}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  ));
  return (
    <div>
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {row}
      </table>
    </div>
  );
};

// BooksList.propTypes = {

// };

export default BooksList;
