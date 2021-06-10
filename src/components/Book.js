/* eslint-disable react/forbid-prop-types */

import React from 'react';

import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;

/* eslint-enable react/forbid-prop-types */
