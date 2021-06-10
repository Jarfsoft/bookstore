/* eslint-disable jsx-a11y/label-has-associated-control */

import { useDispatch } from 'react-redux';
import { React, useState } from 'react';
import addBook from '../actions/index';

// import PropTypes from 'prop-types';

const BooksForm = () => {
  const dispatch = useDispatch();

  const [newBook, setNewBook] = useState({
    id: Math.floor(Math.random() * 100),
    title: '',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewBook({ ...newBook, id: Math.floor(Math.random() * 100) });
    dispatch(addBook(newBook));
    setNewBook({ ...newBook, title: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" required id="name" placeholder="Name" value={newBook.title} onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} />
      <select name="category" required id="category" onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}>
        <option value="">Select Category</option>
        <option value="action">Action</option>
        <option value="biography">Biography</option>
        <option value="history">History</option>
        <option value="horror">Horror</option>
        <option value="kids">Kids</option>
        <option value="learning">Learning</option>
        <option value="sci-fi">Sci-Fi</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default BooksForm;

/* eslint-enable jsx-a11y/label-has-associated-control */
