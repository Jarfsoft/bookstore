import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import CategoryFilter from './CategoryFilter';
import actions from '../actions/index';
import { fetchApi } from '../reducers/books';

const BooksList = () => {
  const list = useSelector((state) => state.books.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
  }, []);

  const category = useSelector((state) => state.filter);

  const handleFilterChange = (value) => {
    dispatch(actions.filter(value));
  };

  const row = list.filter((book) => book.category === category || category === 'ALL').map((book) => (
    <Book key={book.id} book={book} />
  ));

  return (
    <>
      <CategoryFilter onFilterChange={handleFilterChange} />
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
