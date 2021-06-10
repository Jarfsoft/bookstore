/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import actions from '../actions/index';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(actions.removeBook(book));
  };
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="button" onClick={clickHandler}>Remove Book</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;

/* eslint-enable react/forbid-prop-types */
