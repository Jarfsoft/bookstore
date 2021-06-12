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
      <td><button type="button" onClick={clickHandler}>X</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf.isRequired,
};

export default Book;
