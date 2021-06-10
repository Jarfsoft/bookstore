import React from 'react';

import { useSelector } from 'react-redux';
import Book from './Book';
import CategoryFilter from './CategoryFilter';

const BooksList = () => {
  const list = useSelector((state) => state.books.list);

  const category = useSelector((state) => state.filter.filter);
  console.log(category);

  const row = list.filter((book) => book.category === category || category === 'ALL').map((book) => (
    <Book key={book.id} book={book} />
  ));

  return (
    <>
      <CategoryFilter />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {row}
        </tbody>
      </table>
    </>
  );
};

export default BooksList;
