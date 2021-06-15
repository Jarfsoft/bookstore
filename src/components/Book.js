import React from 'react';

import PropTypes from 'prop-types';

const Book = ({ book, handleClick }) => {
  const handleClickEvent = () => {
    handleClick(book);
  };

  return (
    <div className="book components-bg ">
      <div className="book-info">
        <h4>{book.category}</h4>
        <h2>{book.title}</h2>
        <p>Author</p>
        <div className="components-links">
          <a href="nav">Comment</a>
          <a id="edit" href="nav">Edit</a>
          <button type="button" onClick={handleClickEvent}>Remove</button>
        </div>
      </div>
      <div className="graph">
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full"><p> </p></div>
            <div className="mask half"><p> </p></div>
            <div className="inside-circle">
              <p> </p>
            </div>
          </div>
        </div>
        <div>
          <p>0%</p>
          <span>Completed</span>
        </div>
      </div>
      <div className="chapter-manage">
        <span>CURRENT CHAPTER</span>
        <p>Chapter 12</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Book;
