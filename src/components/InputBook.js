import React from 'react';

const InputBook = ({handleSubmit, handleChange, bookTitle}) => {
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
            type="text"
            className="input-text"
            placeholder="Book Title"
            value={bookTitle}
            name="bookTitle"          
            onChange={handleChange}
            />
            <button className="input-submit">Add Book</button>
        </form>
    );
}

export default InputBook;