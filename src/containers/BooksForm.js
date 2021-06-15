import { useDispatch } from 'react-redux';
import { React, useState } from 'react';
import actions from '../actions/index';

const BooksForm = () => {
  const dispatch = useDispatch();

  const [newBook, setNewBook] = useState({
    id: Math.floor(Math.random() * 100),
    title: '',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewBook({ ...newBook });
    dispatch(actions.addBook(newBook));
    setNewBook({ ...newBook, title: '', category: '' });
  };

  const handleChange = (e) => {
    if (e.target.id === 'name') {
      setNewBook({
        ...newBook,
        title: e.target.value,
        id: Math.floor(Math.random() * 100),
      });
    } else {
      setNewBook({
        ...newBook,
        category: e.target.value,
      });
    }
  };

  return (
    <div className="book-form">
      <form onSubmit={handleSubmit}>
        <h1>ADD NEW BOOK</h1>
        <input type="text" required id="name" className="book-input-form" placeholder="Book Title" value={newBook.title} onChange={handleChange} />
        <select name="category" required id="category" value={newBook.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="action">Action</option>
          <option value="biography">Biography</option>
          <option value="history">History</option>
          <option value="horror">Horror</option>
          <option value="kids">Kids</option>
          <option value="learning">Learning</option>
          <option value="sci-fi">Sci-Fi</option>
        </select>
        <input className="book-submit" type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default BooksForm;
