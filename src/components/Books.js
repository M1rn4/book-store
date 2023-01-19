/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import InputBook from './InputBook';
import ListBox from './ListBox';
import Book from './Book';

class Books extends React.Component {
  state = {
    book: [],
    bookTitle: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.bookTitle.trim()) {
      this.setState({
        book: [...this.state.book, this.state.bookTitle],
        bookTitle: '',
      });
    }
  };

    handleChange = (e) => {
      this.setState({
        bookTitle: e.target.value,
      });
    };

    render() {
      return (
        <div className="container">
          <div className="inner">
            <Book genre={this.state.genre} title={this.state.title} author={this.state.author} />
            <InputBook
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              bookTitle={this.state.bookTitle}
            />
            <ListBox items={this.state.book} />
          </div>
        </div>
      );
    }
}

export default Books;
