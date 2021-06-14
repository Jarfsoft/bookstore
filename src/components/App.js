import React from 'react';

import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className="main-cont">
    <div className="main-components"><BooksForm /></div>
    <div className="main-components"><BooksList /></div>
  </div>
);

export default App;
