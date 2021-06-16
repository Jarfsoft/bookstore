import { useDispatch } from 'react-redux';
import { React, useState } from 'react';
import { postApi } from '../actions/index';

const BooksForm = () => {
  const dispatch = useDispatch();

  const [newBook, setNewBook] = useState({
    title: '',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postApi(newBook));
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
