import React from 'react';

import PropTypes from 'prop-types';

const Book = ({ book, handleClick }) => {
  const handleClickEvent = () => {
    handleClick(book);
  };

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="button" onClick={handleClickEvent}>X</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Book;
