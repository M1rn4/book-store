import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const InputBook = ({ handleSubmit, handleChange, bookTitle }) => (
  <form onSubmit={handleSubmit} className="form-container">
    <input
      type="text"
      className="input-text"
      placeholder="Book Title"
      value={bookTitle}
      name="bookTitle"
      onChange={handleChange}
    />
    <button className="input-submit" type="button">Add Book</button>
  </form>
);

InputBook.propTypes = {
  handleSubmit: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
};

export default InputBook;
