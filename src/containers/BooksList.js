import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import actions from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = () => {
  const list = useSelector((state) => state.books.list);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(actions.removeBook(book));
  };

  const category = useSelector((state) => state.filter);

  const handleFilterChange = (value) => {
    dispatch(actions.filter(value));
  };

  const row = list.filter((book) => book.category === category || category === 'ALL').map((book) => (
    <Book key={book.id} book={book} handleClick={handleRemoveBook} />
  ));

  return (
    <>
      <nav className="navbar components-bg">
        <h1>Bookstore CMS</h1>
        <p>BOOKS</p>
        <div>
          <p>CATEGORY:</p>
          <CategoryFilter onFilterChange={handleFilterChange} />
        </div>
      </nav>
      <div className="table">{row}</div>
    </>
  );
};

export default BooksList;
