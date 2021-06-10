/* eslint-disable jsx-a11y/label-has-associated-control */

import { useDispatch } from 'react-redux';
import { React, useState } from 'react';
import addBook from '../actions/index';

// import PropTypes from 'prop-types';

const BooksForm = () => {
  const dispatch = useDispatch();

  const [newBook, setNewBook] = useState({
    id: 59,
    title: '',
    category: 'SyFy',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(newBook));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default BooksForm;

/* eslint-enable jsx-a11y/label-has-associated-control */
