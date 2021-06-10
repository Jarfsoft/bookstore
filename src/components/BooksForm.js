/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { useDispatch } from 'react-redux';
import addBook from '../actions/index';

// import PropTypes from 'prop-types';

const BooksForm = () => {
  const dispatch = useDispatch();

  let title = '';

  const handleChange = (e) => {
    title = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(title));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default BooksForm;

/* eslint-enable jsx-a11y/label-has-associated-control */
