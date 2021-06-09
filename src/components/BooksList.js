import React from 'react';

// import PropTypes from 'prop-types';

const state = {
  books: [
    { bookID: 1, title: 'Book1', category: 'Fiction' },
    { bookID: 2, title: 'Book2', category: 'Fiction' },
    { bookID: 3, title: 'Book3', category: 'Fiction' },
  ],
};

const BooksList = () => {
  const row = state.books.map((book) => (
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
