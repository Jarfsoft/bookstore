import React from 'react';
import { useDispatch } from 'react-redux';

import actions from '../actions/index';

const CategoryFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (value) => {
    dispatch(actions.filter(value));
  };

  return (
    <select name="categoryFilter" required id="categoryFilter" onChange={(e) => handleFilterChange(e.target.value)}>
      <option value="ALL">Select Category</option>
      <option value="action">Action</option>
      <option value="biography">Biography</option>
      <option value="history">History</option>
      <option value="horror">Horror</option>
      <option value="kids">Kids</option>
      <option value="learning">Learning</option>
      <option value="sci-fi">Sci-Fi</option>
    </select>
  );
};

export default CategoryFilter;
