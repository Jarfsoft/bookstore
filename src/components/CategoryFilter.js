import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ onFilterChange }) => {
  const handleFilterChange = (value) => {
    onFilterChange(value);
  };

  return (
    <select name="categoryFilter" required id="categoryFilter" onChange={(e) => handleFilterChange(e.target.value)}>
      <option value="ALL">All</option>
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

CategoryFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
