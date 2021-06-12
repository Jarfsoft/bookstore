import React from 'react';

import BooksList from './BooksList';
import BooksForm from './BooksForm';

const App = () => (
  <div className="main-cont">
    <div className="main-components"><BooksForm /></div>
    <div className="main-components"><BooksList /></div>
  </div>
);

export default App;
