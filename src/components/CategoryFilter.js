import { React, useState } from 'react';

const CategoryFilter = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <select name="categoryFilter" required id="categoryFilter" onChange={(e) => handleFilterChange(e.target.value)}>
      <option value="">Select Category</option>
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
